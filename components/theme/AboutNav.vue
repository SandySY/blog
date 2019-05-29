<template>
  <div>
    <nav class="nav">
      <ul>
        <li class="nav-about fade fade1"><a href="#about">关于</a></li>
        <li class="nav-works fade fade4"><a href="#works">作品</a></li>
        <li class="fade back-home"><a href="#top">首页</a></li>
        <li class="nav-skill fade fade2"><a href="#skill">能力</a></li>
        <li class="nav-contact fade fade3"><a href="#contact">联系</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      }
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
  }
</script>

<style scoped>

</style>

