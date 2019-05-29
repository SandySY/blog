<template>
  <footer id="main-footer">
    <div class="container a-fadeinL">
      <span style="color:#20558a;">我的: &nbsp;&nbsp;&nbsp;</span>
      <a href="http://weibo.com/u/1962390885/home">新浪微博</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="http://www.zhihu.com/people/sandyWeb">知乎</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="https://github.com/SandySY">github</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="feed">网站地图</a>
      <p>Copyright © All Rights Reserved <a
        href="javascript: void(0)">蜀ICP备18026748号</a>
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Bottom',
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
      this.$nextTick(() => {
        //this.headerHeight = this.$refs.header.clientHeight;
        this.$forceUpdate();
      });
    },
  }
</script>

<style scoped>

  #main-footer {
    width: 100%;
    height: 75px;
    padding: 10px 0;
    background: url("../assets/images/footersub.png") repeat-x center top #dcdcdc;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
  }

  #main-footer p {
    margin-bottom: 0;
    color: #818181;
    text-align: left
  }
</style>
