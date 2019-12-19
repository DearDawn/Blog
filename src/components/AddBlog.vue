<template>
  <div id="content-center">
    <h2>添加新博客{{id}}</h2>
    <br />标题<input type="text" v-model="title" />
    <br />正文<textarea v-model="content" id="content"></textarea>
    <br />标签<input type="text" v-model="tab" />
    <br />分类<input type="text" v-model="sort" />
    <button @click="addBlog">提交</button>
  </div>
</template>

<script>
import Data from "./Data";
import LocalStore from "@/store/localfile.js";

export default {
  name: "AddBlog",
  data() {
    return {
      title: "",
      content: "",
      tab: ["日记", "碎碎念"],
      sort: "装修日记"
    };
  },
  props: ["id"],
  methods: {
    addBlog() {
      var article = {
        id: this.id,
        title: this.title,
        data: new Date().toLocaleString(),
        content: this.content,
        views: "0",
        stars: "0",
        tab: ["日记", "碎碎念"],
        sort: "装修日记",
        comments: []
      };
      this.$emit("addArticle", article);//保存文章
    }
  }
};
</script>

<style lang="scss" scoped>
</style>