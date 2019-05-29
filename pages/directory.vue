<template>
  <div>
    <Page>
      <div id="main" class="container page">
        <div class="content a-fadeinL">
          <article class="post block">
            <h1 class="title">文章存档 <span style="font-size:13px;color:#ccc;">(滚动到底部自动翻页)</span></h1>
            <div class="entry archives" id="archivesList">

              <h2>2018</h2>
              <ul>
                <li>
                  <time datetime="2018-08-29T00:00:00+08:00">08/29</time>
                  <a href="post/web_addfont.htm">网页中添加特殊字体解决方案</a>
                  <span style="color:#a8ced8;margin-left:30px;">89次浏览</span>
                </li>

                <li>
                  <time datetime="2018-08-09T00:00:00+08:00">08/09</time>
                  <a href="post/js_webapi_filereader.htm">FileReader获取上传图片的宽高</a>
                  <span style="color:#a8ced8;margin-left:30px;">983次浏览</span>
                </li>

                <li>
                  <time datetime="2018-08-02T00:00:00+08:00">08/02</time>
                  <a href="post/js_textarea_enter.htm">js对textarea换行符的处理方案</a>
                  <span style="color:#a8ced8;margin-left:30px;">1124次浏览</span>
                </li>
                <li>
                  <time datetime="2018-07-28T00:00:00+08:00">07/28</time>
                  <a href="post/single_page_refrashtips.htm">单页应用/vue等页面未保存刷新关闭返回等确认提示</a>
                  <span style="color:#a8ced8;margin-left:30px;">1468次浏览</span>
                </li>
              </ul>

            </div>
            <div class="loadingdiv">正在加载中..</div>
          </article>
        </div>
      </div>

    </Page>
  </div>
</template>

<script>

  export default {
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

