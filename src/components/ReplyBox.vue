<template>
  <div style="padding-left:50px;">
    <ReplyList :reply="replyItem" />
    <div>
      #{{replyItem.length+1}}楼：
      名字
      <input type="text" v-model="reply.name" />
      内容
      <input type="text" v-model="reply.content" />
      <button @click="addReply">发表</button>
    </div>
  </div>
</template>

<script>
import ReplyList from "@/components/ReplyList.vue";

export default {
  data() {
    return {
      reply: {
        id: 0,
        name: "",
        content: ""
      }
    };
  },
  components: {
    ReplyList
  },
  props: ["replyItem"],
  methods: {
    addReply() {
      this.reply.id = this.replyItem.length + 1;
      var _this = this;
      this.$emit("addReply", _this.reply);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>