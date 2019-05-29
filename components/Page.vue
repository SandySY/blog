<template>
    <div class="main-lay">
        <!--<slot name="top"></slot>
        <slot name="bottom">
          <h1>djs11111111111111111111k</h1>
        </slot>-->
      <Top slot="top"></Top>
      <div class="main-box">
        <slot></slot>
      </div>
      <Gotop></Gotop>
      <Bottom slot="bottom"></Bottom>
    </div>
</template>
<script>
    /**
     * Page组件
     * Page组件用于编写指定页面,默认slot内容都是页面主要内容
     * 页面主要内容的高度是由window高度动态计算而来
     * 组件具有3个slot插槽top,bottom,extra在不同的位置实现不同的功能
     * top 插槽一般用于显示页面顶部导航,推荐使用Top组件进行填充,如果页面不具有顶部,那么不填充top插槽即可
     * bottom 插槽一般用于显示底部固定栏,例如首页底部的菜单
     * extra 插槽一般用于需要游离整个页面存在的效果,例如需要一个全屏的弹窗
     * top和bottom插槽都需要使用一个根节点包裹里面的所有元素,并且这个根节点高度决定了top和bottom实际高度
     */
    export default {
      name: 'Page',
      data() {
        return {
          topHeight: 0,
          bottomHeight: 0
        };
      },
      mounted() {
        this.$nextTick(() => {
          if (this.$slots.bottom) {
            setTimeout(() => {
              this.bottomHeight = this.$slots.bottom[0].elm.clientHeight;
            }, 14);
          }
          if (this.$slots.top) {
            setTimeout(() => {
              this.topHeight = this.$slots.top[0].elm.clientHeight;
            }, 14);
          }
        });
      },
      activated() {
        this.$nextTick(() => {
          if (this.$slots.bottom) {
            setTimeout(() => {
              this.bottomHeight = this.$slots.bottom[0].elm.clientHeight;
            }, 14);
          }
          if (this.$slots.top) {
            setTimeout(() => {
              this.topHeight = this.$slots.top[0].elm.clientHeight;
            }, 14);
          }
        });
      },

    };
</script>
<style lang="less" scoped>
  .main-lay{
    position: relative;
    .main-box{
      padding-top: 80px;
      padding-bottom: 95px;
    }
  }
</style>
