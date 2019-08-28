<template>
  <div class="rate-content">
    <input type="radio" name="rate"
           v-for="(item, index) in new Array(quantity)"
           :key="index" @click="changeScore(index)"
           :checked="quantity-index == value"
           :disabled="readOnly"
           :class="{'edit': !readOnly}">
  </div>
</template>
<script>
  /*
  * @auth： Sandy
  * @email： lshfyy@163.com
  * 技术点及思路：
  *   1.样式反转display: flex; flex-flow: row-reverse; 操作兄弟元素input:checked ~ input
  *   2.双向绑定分数 便于调用处使用
  *   3.根据场景使用只读和编辑两种模式
  * example：
  *   <Star :readOnly="Boolean" v-model="scoreVar" :quantity="Number"></Star>
  * */
  export default {
      name: "Star",
      model: {
        prop: 'value',
        event: 'change'
      },
      props: {
          readOnly: {
            type: Boolean,
            required: false,
            default: false
          },
          value: {
              type: Number,
              required: false,
              default: 0
          },
          quantity: {
              type: Number,
              required: false,
              default: 5
          }
      },
      data(){
          return {
              myScore: this.value
          }
      },
      methods: {
          changeScore(index) {
              if (this.readOnly) return;
              this.myScore = this.quantity - index;
          }
      },
      watch:{
          value(newValue, oldValue){
              this.myScore = newValue
          },
          myScore(newValue, oldValue){
              this.$emit('change', newValue)
          }
      }
  }
</script>
<style scoped lang="less">
  .rate-content{
    @hight-color: #ffa822; //高亮颜色
    @basic-color: #999999; //默认颜色
    // 去掉默认样式
    input {
      -webkit-appearance: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
    //反向排列
    display: flex;
    flex-flow: row-reverse;
    input[name="rate"] {
      font-family: "iconfont"; // 之前引入的iconfont字体
      font-size: 30px;
      padding-right: 10px;
      transition: transform .2s ease;

      // 默认显示的星星
      &::after {
        content: "\e645";
        color: @basic-color;
        transition: color .4s ease; // 加点颜色过渡效果
      }

      // 高亮的星星
      &:checked,
      &.edit:hover {
        &::after {
          content: "\edfa";
          color: @hight-color;
        }

        // 兄弟元素一起高亮
        & ~ input[name="rate"] {
          &::after {
            content: "\edfa";
            color: @hight-color;
          }
        }
      }
      //移入放大
      &:hover {
        transform: scale(1.2);
      }
    }
  }
</style>
