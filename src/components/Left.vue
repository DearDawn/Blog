<template>
  <div id="content-left">
    <ul>
      <li v-for="item in list" :key="item.id" @click="show(item.id)">
        <a href="#">第{{item.id}}篇：{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Data from "./Data.js";

export default {
  name: "content-left",
  data() {
    return {
      list: this.list
    };
  },
  mounted() {
    var _this = this;
    this.axios.get("api/catalog.json").then(res => {
      _this.list = res.data;
    });
  },
  methods: {
    show: function(x) {
      Data.$emit("e", x);
    }
  },
  props: {
    id: Number
  },
  watch: {
    Id() {
      this.list = [6, 7, 0];

      return {
        list: []
      };
    }
  }
};
</script>

<style lang="scss" scoped>
#content-left {
  height: 100%;
  float: left;
  width: 350px;
  background-color: bisque;
}
#content-left ul {
  padding: 10px;
  margin: 0;
}
#content-left ul li {
  list-style: none;
  width: 100%;
  padding: 20px 0;
  margin-bottom: 2px;
  text-align: left;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: salmon;
}
#content-left ul li a {
  text-decoration: none;
  color: white;
}
</style>
