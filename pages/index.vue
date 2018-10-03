<template>
  <div>
    <Top slot="top" :title="'首页'"></Top>
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
        </article>

        <article class="post  block ">
          <h2 class="title">
            <a href="post/js_webapi_filereader.htm">FileReader获取上传图片的宽高</a>
          </h2>
          <div class="meta">
            <time>2018年8月9日</time>
          </div>
          <div class="entry"><h2>前言</h2>
            <p>input upload 图片上传，经常要判断上传图片的宽高。除了运用一些上传插件可以获取。原生的上传方式也可以获取，下面就说一下如何获取上传图片的宽高。</p>
            <h2>以饿了么上传插件为例</h2>
            <div class="ReadMore"><a href="post/js_webapi_filereader.htm">[阅读更多]</a></div>
          </div>
        </article>

        <article class="post  block ">
          <h2 class="title">
            <a href="post/js_textarea_enter.htm">js对textarea换行符的处理方案</a>
          </h2>
          <div class="meta">
            <time>2018年8月2日</time>
          </div>
          <div class="entry"><h2>前言</h2>
            <p>本文很简单，就是记录一下js对textarea换行符的处理。</p>
            <h2>调试</h2>
            <p>随便写一个textarea</p>
            <div class="ReadMore"><a href="post/js_textarea_enter.htm">[阅读更多]</a></div>
          </div>
        </article>

        <article class="post  block ">
          <h2 class="title">
            <a href="post/single_page_refrashtips.htm">单页应用/vue等页面未保存刷新关闭返回等确认提示</a>
          </h2>
          <div class="meta">
            <time>2018年7月28日</time>
          </div>
          <div class="entry"><h2>前言</h2>
            <p>
              单页应用，例如vue,react，项目中有些编辑页面不是时时保存的。用户做了半天，刷新了页面，或者关闭了页面，就需要重新制作。因此，刷新，返回，关闭页面的时候进行用户提示，显得很重要。但是这个单页应用，用户在刷新、关闭、历史返回中如何制作呢？这个问题，我很久之前就做过，只是感觉效果不尽如人意。因此也一直没有在博客中写相关文章。今天简单总结一下我的一些解决方案。假如大家有更好的方案，欢迎交流！</p>
            <h2>vue 路由守卫</h2>
            <p>刚刚查看了一下最先版本的Vue Router 官方文档，比以前的文档详细了一些。新版的Vue Router文档中，很详细的写了<a
              href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB">组件内的守卫</a>，
            </p>
            <p>最后提到了如下方法：</p>
            <div class="ReadMore"><a href="post/single_page_refrashtips.htm">[阅读更多]</a></div>
          </div>
        </article>

        <article class="post  ">
          <h2 class="title">
            <a href="post/win_kill.htm">win10删掉某个进程命令行记录</a>
          </h2>
          <div class="meta">
            <time>2018年7月17日</time>
          </div>
          <div class="entry"><h2>前言</h2>
            <p>本文纯粹是记录一个命令行，自己经常忘掉的。</p>
            <p>主要是今天用<a href="post/vscode_task_emmet.htm">vscode 的task</a>起服务，关掉vscode后，发现端口还在，我启动另外一个相同端口的项目就换成了别的端口，无奈杀进程，但是发现杀进程的命令行忘记了，本文简单记录一下。
            </p>
            <div class="ReadMore"><a href="post/win_kill.htm">[阅读更多]</a></div>
          </div>
        </article>-->

      </section>
      <!--<div class="navigation a-fadeinL">
        <table width='100%'>
          <tbody>
          <tr>
            <td width='120' align='left'>

            </td>
            <td width='auto' align='center'>
              <strong class="fade">
                1/60
              </strong>
            </td>
            <td width='120' align='right'>

              <div class="alignright">
                <a href="p/2.htm">下一页</a>
              </div>

            </td>
          </tr>
          </tbody>
        </table>
      </div>-->
      <Sidebar></Sidebar>
    </section>
    <Bottom slot="bottom"></Bottom>
  </div>
</template>

<script>

  import {log} from '@/assets/descriptors';


  export default {
    name: "index",
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

