<template>
  <div>
    <div style="width:100%;min-height:300px;">
      <h1>{{blog.title==""?"空":blog.title}}</h1>
      <h3>{{blog.data}} 👁{{blog.views}} ⭐{{blog.stars}}</h3>
      <div id="p">
        <pre>{{blog.content}}</pre>
      </div>
    </div>
    <p><button @click="star">⭐</button> 标签：{{blog.tab}} 分类：{{blog.sort}}</p>
  </div>
</template>

<script>
export default {
  props: ["blog"]
  ,methods:{
    star(){
      this.$emit("star")
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: #555555;
}
p,
#p {
  font-size: 120%;
}
pre {
  font-size: inherit;
  font-family: inherit;
  white-space: pre-wrap;
}
</style>