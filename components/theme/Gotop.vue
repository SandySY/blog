<template>
  <div class="actGotop" id="backtop" v-show="scrollTop">
    <a @click="goTop()" title="返回顶部"></a>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: 'Gotop',
    data() {
      return {

      }
    },
    methods: {
      goTop(){
        //返回顶部
        (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - currentScroll / 5);
          }
        })();
      }
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
    computed: {
      ...mapGetters("window", {
        scrollTop: "scrollTop"
      })
    }
  }
</script>

<style scoped>

</style>
