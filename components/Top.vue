<template>
  <div class="navbar navbar-default">
    <div class="container">
      <slot name="center">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-nav">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.htm">
                  <span class="logo">
                   Sandy
                  </span>
        </a>
      </div>
      <div class="collapse navbar-collapse navbar-collapse-nav" style="height:0px;">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="index.htm">首页</a></li>
          <li><a href="archives.htm">文章存档</a></li>
          <li><a href="about.htm">关于我</a></li>
          <li><a href="nav.htm">前端导航</a></li>
          <li><a href="http://sylove.xin/">前端资料库</a></li>
          <li><a href="tools/index.htm">小工具</a></li>
          <li><a href="page/guanggaohz.htm">合作</a></li>
          <!-- <li class="tuijian"><a href="http://how2j.cn/t/30" target="_blank" rel="nofollow">前端练手项目</a></li> -->
          <!--加推荐tuijian -->
        </ul>
      </div>
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Top',
    props: {
      title: {
        required: false,
        default: ""
      },
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted(){

    },
    created(){

    },
    activated() {
      /*this.$nextTick(() => {
        //this.headerHeight = this.$refs.header.clientHeight;
        this.$forceUpdate();
      });*/
    },
  }
</script>

<style scoped>

</style>
