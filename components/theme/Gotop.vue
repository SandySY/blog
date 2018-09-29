<template>
  <div class="actGotop" id="backtop" style="display: block;">
    <a href="javascript:;" title="返回顶部"></a>
  </div>
</template>

<script>
  export default {
    name: 'Gotop',
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

</style>
