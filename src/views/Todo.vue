<template>
  <div>
    <h1>ToDo List</h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew" />
    <ul>
      <li
        v-for="(item,index) in items"
        :key="index"
        :class="item.isFinished?'done':'todo'"
        @click="toggleState(item)"
      >{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
import LocalStore from "@/store/localfile.js";
export default {
  data() {
    return {
      items: LocalStore.fetch(),
      newItem: ""
    };
  },
  watch: {
      
    items:function(){
        var _this=this
      LocalStore.save(_this.items);
    }
  },
  methods: {
    toggleState(item) {
      item.isFinished = !item.isFinished;
    },
    addNew() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  text-decoration: underline;
}
.done {
  text-decoration: line-through;
}
</style>