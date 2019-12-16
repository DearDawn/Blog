<template>
  <div id="app">
    <Header/>
    <router-view />
<Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">

body,
html {
  padding: 0;
  
  margin: 0;
  height: 100vh;
  background-color: #f5f5f5;
  position: relative;
}
body{
  padding-top: 70px;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
