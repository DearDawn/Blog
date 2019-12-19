<template>
  <div class="home">
    <Left @showArticle="showArticle" @addingBox="addingBox" ref="left" />
    <Center @addIndex="addIndex" ref="center">
    </Center>
    <Right />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Center from "@/components/Center.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Left,
    Right,
    Center
  },
  methods: {
    showArticle(id) {
      this.$refs.center.showArticle(id);
    },
    addingBox(id) {
      this.$refs.center.addingBox(id);
    },
    addIndex(x) {
      this.$refs.left.addIndex(x);
    }
  }
};
</script>
<style lang="scss">
.home {
  padding: 0;
  margin: 0;
  overflow: auto;
  width: 1340px;
  height: 100vh;
  margin: 0 auto 20px auto;
}
</style>