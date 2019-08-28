<template>
  <article class="post  block " v-if="article">
    <h2 class="title">
      <a href="post/web_addfont.htm" v-text="article.title || '随笔'"></a>
    </h2>
    <div class="meta">
      <time v-text="article.time"></time>
      <span>90次浏览</span>
    </div>
    <div class="entry">
      <h2>前言</h2>
      <div v-html="article.html"></div>
      <div class="ReadMore">
        <a href="post/web_addfont.htm">[阅读更多]</a>
        <Star></Star>
      </div>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'ArticleBlock',
    props: ['article']/*{
      /!* 文章对象
       *  {
       *      title: '', // 标题，可选，默认“随笔”
       *      time: '', // 时间 string
       *      html: '', // 前文 文案
       *  }
       *!/
      article: Object
    }*/,
    data() {
      return {}
    },
    methods:{

    }
  }
</script>
