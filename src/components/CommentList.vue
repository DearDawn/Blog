<template>
  <div>
    <hr />
    <button @click="toggleState">评论({{list.length}})</button>
    <div v-if="isCommenting">
      <p>评论列表：</p>
      <CommentItem
        v-for="item in list"
        :key="item.id"
        :comment="item"
        @commentStar="commentStar"
        @addReply="addReply"
        @debugComment="debugComment"
      />
      <CommentBox @addComment="addComment" :commentID="list.length+1" />
    </div>
  </div>
</template>

<script>
import CommentItem from "@/components/CommentItem.vue";
import CommentBox from "@/components/CommentBox.vue";

export default {
  data() {
    return {
      isCommenting: false
    };
  },
  props: ["list"],
  components: {
    CommentItem,
    CommentBox
  },
  methods: {
    commentStar(commentID) {
      this.$emit("commentStar", commentID);
    },
    addReply(comment) {
      this.$emit("addReply", comment);
    },
    toggleState() {
      this.isCommenting = !this.isCommenting;
    },
    addComment(content){
        this.$emit("addComment",content)
    },
    debugComment() {}
  }
};
</script>

<style lang="scss" scoped>
</style>