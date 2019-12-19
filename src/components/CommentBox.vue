<template>
  <div class="comment">
    #{{commentID}}楼：
    <hr />
    <br />
    <label for="name">名字</label>
    <input type="text" id="name" v-model="comment.name" />
    <label for="content">内容</label>
    <textarea id="content" v-model="comment.content"></textarea>
    <button @click="addComment">发表评论</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        id: 0,
        name: "",
        content: ""
      }
    };
  },
  props: ["commentID"],
  methods: {
    addComment() {
      this.comment.id = this.commentID;
      var content = this.comment;
      this.$emit("addComment", content);
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  border: 1px solid black;
  padding: 10px;
}
input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: inherit;
}
textarea {
  vertical-align: text-top;
  width: 100%;
  box-sizing: border-box;

  padding: 10px;
  font-size: inherit;
  height: 100px;
}
</style>