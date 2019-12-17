
<template>
 <div>
    <div id="content-center" v-if="mode=='read'">
    <h1>标题：{{kk.title==""?"空":kk.title}}</h1>
    <h3>时间：{{kk.data}} 浏览量：{{kk.views}} 星星数：{{kk.stars}}</h3>
    <div id="p">
      <pre>{{kk.content}}</pre>
    </div>
    <p>
      标签：
      <span v-for="(tab,index) in kk.tab" :key="index">&nbsp;{{tab}}&nbsp;</span>
      分类：{{kk.sort}}
    </p>
    <p>评论：</p>
    <p v-for="(comments,index) in kk.comments" :key="index">{{comments.name}}说：{{comments.comment}}</p>
  </div>
  <AddBlog v-else/>
 </div>
</template>

<script>
import Data from "./Data.js";
import AddBlog from "@/components/AddBlog.vue";
export default {
  name: "content-center",
  components:{
    AddBlog
  },
  data() {
    return {
      kk: {},
      mode: "read"
    };
  },
  created() {
    this.kk = { title: "" };
  },
  mounted: function() {
    var _this = this;
    Data.$on("e", function(m) {
      _this.mode = "read";
      _this.kk.stars++;
      if (m != _this.kk.id) {
        _this.kk.title = "加载中。。。";
        setTimeout(() => {
          _this.axios.get("api/article.json").then(res => {
            _this.kk = res.data[0];
            _this.kk.id = "2";
          });
        }, 1000);
      }
    });
    Data.$on("add", function() {
      _this.mode = "write";
    });
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
  box-sizing: border-box;
  background-color: aquamarine;
}
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
