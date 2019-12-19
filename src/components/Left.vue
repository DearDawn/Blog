<template>
  <div id="content-left">
    <ul>
      <li @click="adding">添加新博客</li>
      <li>总条数：{{list.length}}</li>
      <li v-for="item in list" :key="item.id" @click="show(item.id)">
        第{{item.id}}篇：{{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import Data from "./Data.js";
import LocalStore from "@/store/localfile.js";

export default {
  name: "content-left",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.list = LocalStore.catalogFetch();
  },
  methods: {
    show(id) {
      this.$emit("showArticle", id);
      console.log("我被调用了"+id)
    },
    adding(){
      var _this = this;
      this.$emit("addingBox",_this.list.length+1)
    },
    addIndex(index) {
      var _this = this;
      this.list.push(index);
      LocalStore.catalogSave(_this.list);
      setTimeout(() => {
        _this.show(index.id);
      }, 100);
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
