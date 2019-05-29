<template>
  <div>
    <Page>
      <div class="container fish-box">
        <Waterfall :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
          <template slot-scope="props">
            <div class="player_info">
              <div class="title"><i class="tt tt-quanburen"></i>{{props.value.info}}</div>
              <!--<div class="ticket">
                <button @click="upLoadTicket(props.value.id)"><i class="tt tt-quanburen"></i>投票</button>
              </div>-->
              <p class="num">{{props.index+1}}票 <span>年月日</span> </p>
            </div>
          </template>
        </Waterfall>
      </div>
    </Page>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        imgsArr: [],
        fetchImgsArr: []
      }
    },
    methods: {
      // 假数据
      initImgsArr(n, m) { //num 图片数量
        var arr = [];
        for (var i = n; i < m; i++) {
          arr.push({ id:i,src: require(`static/baby/baby_${i}.jpg`), link: 'https://www.baidu.com', info: '一些图片描述文字' })
        }
        return arr.concat(arr);
      },

      fetchImgsData() {
        this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
      },

      upLoadTicket(index){ //投票按钮
        console.log(index);
      }
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
    created() {
      this.imgsArr = this.initImgsArr(0, 5)
      // this.fetchImgsArr = this.initImgsArr(5, 10) // 模拟每次请求的新的图片的数据数据
    },
  }
</script>

<style scoped lang="less">
  .fish-box{
    overflow: visible;
  }
</style>

