<template>
  <div id="header">
    <div id="header-logo">
      <img src="img/small_a.png" />
      <a href="#">恰糖</a>
    </div>
    
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  height: 50px;
  line-height: 50px;
  width: 100%;
  background-color: white;
  box-shadow: 0 0px 5px 0px;
  position: fixed;
  top: 0;
}
#header-logo {
  float: left;
  padding: 0 10px;
}
#header-logo img {
  height: 50px;
  margin: 0;
  display: block;
  background-color: #fff;
  float: left;
}
#header-logo a {
  height: 50px;
  float: left;
  margin: 0;
  display: block;
}

#nav {
    padding: 0;
    float: right;
    height: 50px;
  a {
    padding: 0 10px;
    height: 50px;
    text-decoration: none;
    float:left;
    display: block;
    
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      border-bottom:2px solid #42b983;
      box-sizing: border-box;    }
  }
}
</style>