
<template>
  <div id="content-center" v-if="mode=='read'">
    <ArticleBox :blog="blog" @star="star" />
    <CommentList :list="blog.comments" @commentStar="commentStar" @addComment="addComment" @addReply="addReply"/>
  </div>
  <AddBlog @addArticle="addArticle" :id="blogID" v-else />
</template>

<script>
import Data from "./Data.js";
import AddBlog from "@/components/AddBlog.vue";
import LocalStore from "@/store/localfile.js";
import CommentList from "@/components/CommentList.vue";
import CommentItem from "@/components/CommentItem.vue";
import Star from "@/components/Star.vue";
import ArticleBox from "@/components/ArticleBox.vue";
export default {
  name: "content-center",
  components: {
    AddBlog,
    Star,
    ArticleBox,
    CommentItem,
    CommentList
  },
  data() {
    return {
      blog: {},
      mode: "read",
      total: 1,
      blogID: 0
    };
  },
  created() {
    this.showArticle(1);
  },
  methods: {
    showArticle(id) {
      var _this = this;
      this.mode = "read";
      this.blog = LocalStore.articleFetch(id);
      this.blog.views++;
      LocalStore.articleSave(_this.blog.id, _this.blog);
    },
    addingBox(id) {
      var _this = this;
      this.blogID = id;
      this.mode = "write";
      console.log(id, _this.blogID);
    },
    addArticle(article) {
      var index = {
        id: article.id,
        title: article.title
      };
      this.$emit("addIndex", index);
      LocalStore.articleSave(article.id, article);
    },
    addComment(content) {
      var comment = {
        id: content.id,
        name: content.name,
        content: content.content,
        stars: 0,
        reply: []
      };
      this.blog.comments.push(comment);
      console.log(this.blog.comments);
      var _this = this;
      this.saveAndRefresh();
    },
    star() {
      var _this = this;
      this.blog.stars++;
      this.saveAndRefresh();
    },
    commentStar(commentID) {
      this.blog.comments[commentID - 1].stars++;
      var _this = this;
      this.saveAndRefresh();
    },
    addReply(comment) {
      this.blog.comments[comment.id - 1] = comment;
      var _this = this;
      this.saveAndRefresh();
    },
    saveAndRefresh() {
      var _this = this;
      LocalStore.articleSave(_this.blog.id, _this.blog);
      this.blog = LocalStore.articleFetch(_this.blog.id);
    },
    debugComment(id, obj) {
      // this.blog.comments[id - 1] = obj;
      // var _this = this;
      // console.log("aa" + _this.blog.id);
      // this.addArticle(_this.blog.id, _this.blog);
    }
  }
};
</script>

<style lang="scss">
#content-center {
  height: 100%;
  float: left;
  width: 900px;
  margin: 0 10px;
  text-align: left;
  padding: 20px;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: aquamarine;
}
</style>
