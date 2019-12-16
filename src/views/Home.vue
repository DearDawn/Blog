<template>
  <div class="home">
    <Left />
    <Center>
      <!-- <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" /> -->
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