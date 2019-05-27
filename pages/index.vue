<template>
  <div>
    <!--<Top slot="top" :title="'首页'"></Top>-->
    <Page>
      <!--<Top slot="top"></Top>
      <Bottom slot="bottom"></Bottom>-->
      <section id="main" class="container">
        <section class="posts block a-fadeinL tips" style="margin-bottom:10px;">
          <span>公告：博客升级，全新界面，分享快乐！</span>
        </section>
        <section class="posts block a-fadeinL">
          <ArticleBlock v-for="(item, index) in articles" v-bind:key="index" v-bind:article="item">
          </ArticleBlock>

          <!--<article class="post  block ">
            <h2 class="title">
              <a href="post/web_addfont.htm">网页中添加特殊字体解决方案</a>
            </h2>
            <div class="meta">
              <time>2018年8月29日</time>
            </div>
            <div class="entry"><h2>前言</h2>
              <p>
                今天总结一下网页中添加特殊字体的解决方案。一个字体一般情况下很大，少则1-2M，一般是4-6M，大的字体十几兆的都有。加载在网页中会导致速度变得很慢，因此，你在网页中很少看到有用特殊字体的原因。今天主要总结一下网页中运用特殊字体的一些解决方案。</p>
              <h2>方案一：（针对有针对性的展示，死的文字）</h2>
              <p>目前市面上有很多字体压缩的方案，但是都是提供了具体的字体库，也就是你网页中用的文字，都在字体库里面，不在里面则网页中就不会展示。</p>
              <div class="ReadMore"><a href="post/web_addfont.htm">[阅读更多]</a></div>
            </div>
          </article>-->

        </section>
        <Sidebar></Sidebar>
      </section>

    </Page>
    <!--<Bottom slot="bottom"></Bottom>-->
  </div>
</template>

<script>

  import {log} from '@/assets/descriptors';
  import Bottom from "../components/Bottom";


  export default {
    name: "index",
    components: {Bottom},
    /*components: {
      Top, Bottom, Sidebar, ArticleBlock
    },*/
    /*scrollToTop: true,*/
    data() {
      return {
        articles: [
          {
            title: '网页中添加特殊字体解决方案',
            time: '2018年8月29日',
            html: `<p>今天总结一下网页中添加特殊字体的解决方案。一个字体一般情况下很大，少则1-2M，一般是4-6M，大的字体十几兆的都有。加载在网页中会导致速度变得很慢，因此，你在网页中很少看到有用特殊字体的原因。今天主要总结一下网页中运用特殊字体的一些解决方案。</p>
            <h2>方案一：（针对有针对性的展示，死的文字）</h2>
            <p>目前市面上有很多字体压缩的方案，但是都是提供了具体的字体库，也就是你网页中用的文字，都在字体库里面，不在里面则网页中就不会展示。</p>`
          },
          {
            title: '网页中添加特殊字体解决方案',
            time: '2018年8月29日',
            html: `<p>今天总结一下网页中添加特殊字体的解决方案。一个字体一般情况下很大，少则1-2M，一般是4-6M，大的字体十几兆的都有。加载在网页中会导致速度变得很慢，因此，你在网页中很少看到有用特殊字体的原因。今天主要总结一下网页中运用特殊字体的一些解决方案。</p>
            <h2>方案一：（针对有针对性的展示，死的文字）</h2>
            <p>目前市面上有很多字体压缩的方案，但是都是提供了具体的字体库，也就是你网页中用的文字，都在字体库里面，不在里面则网页中就不会展示。</p>`
          }
        ]
      }
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
  }
</script>

<style scoped>

</style>

