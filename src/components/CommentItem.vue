<template>
  <div>
    <p>
      #{{comment.id}}楼：{{comment.name}}说：{{comment.content}} ⭐{{comment.stars}}
      <button @click="commentStar">⭐</button>
      <button @click="toggleState">回复({{comment.reply.length}})</button>
    </p>
    <ReplyBox v-if="isReplying" @addReply="addReply" :replyItem="comment.reply" />
    
  </div>
</template>

<script>
import ReplyBox from "@/components/ReplyBox.vue";
export default {
  data() {
    return {
      isReplying: false,
      reply: {
        id: 1,
        name: "",
        content: ""
      }
    };
  },
  components: {
    ReplyBox
  },
  created() {
    // var _this = this;
    // // console.log(this.comment.reply)
    // if (this.comment.stars == null) {
    //   var x = JSON.stringify(_this.comment);
    //   x = x.substring(0, x.lastIndexOf("}"));
    //   this.comment = JSON.parse(x.concat(',"stars":0}'));
    //   var y = this.comment;
    //   this.$emit("debugComment", _this.comment.id, y);
    // }
    // if (this.comment.reply == null) {
    //   var x = JSON.stringify(_this.comment);
    //   x = x.substring(0, x.lastIndexOf("}"));
    //   this.comment = JSON.parse(x.concat(',"reply":[]}'));
    //   var y = this.comment;
    //   this.$emit("debugComment", _this.comment.id, y);
    // }
  },

  props: ["comment"],
  methods: {
    commentStar() {
      var _this = this;
      this.$emit("commentStar", _this.comment.id);
    },
    toggleState() {
      this.isReplying = !this.isReplying;
    },
    addReply(reply) {
      this.comment.reply.push(reply);
      var _this = this;
      this.$emit("addReply", _this.comment);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>