<template>
  <div>
    <Top slot="top" :title="'首页'"></Top>
    <section id="main" class="container">
      <section class="posts block a-fadeinL tips" style="margin-bottom:10px;">
        <span>公告：博客升级，全新界面，分享快乐！</span>
      </section>
      <section class="posts block a-fadeinL">

        <article class="post  block ">
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
        </article>

      </section>
      <div class="navigation a-fadeinL">
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
      </div>
      <div class="sidebar">
        <div class="block a-fadeinR" style="overflow:visible">
          <div class="widget about">
            <strong class="wt">关于sandy博客 </strong>
            <div class="wc">
              <p style="text-indent: 20px;"></p>
              <p style="text-indent: 20px;">
                sandy博客，是Sandy个人技术博客，主要记录和总结前端工作中常用的知识及我的生活。</p>
              <p style="text-indent: 20px;">订阅博客文章，请关注下方微信号，后期会通过订阅号将文章发送到您的手机上。</p>
              <p style="text-indent: 20px;">博客文章转载及<a href="page/guanggaohz.htm"><b>广告合作</b>请点击</a></p>
              <div class="sep10"></div>
            </div>
            <strong class="wt">联系方式</strong>
            <div style="position:relative;">
              <a href="http://wpa.qq.com/msgrd?v=3&uin=1655408326&site=qq&menu=yes" target="_blank" class="contractmethod">
                <i class="iconfont" style="font-size:3em;"></i>
              </a>
              <a href="javascript:void(0);" class="contractmethod weixinhover">
                <i class="iconfont" style="font-size:3em;"></i>
                <div class="hoverimg"></div>
              </a>
              <a href="https://github.com/SandySY" rel="nofollow" target="_blank" class="contractmethod mt5">
                <i class="iconfont" style="font-size:3em;"></i></a>
              <a href="http://weibo.com/u/1962390885/home" rel="nofollow" target="_blank" class="contractmethod fzup">
                <i class="iconfont" style="font-size:3em;"></i></a>
              <a href="http://www.zhihu.com/people/sandyWeb" rel="nofollow" target="_blank" class="contractmethod fzup">
                <i class="iconfont" style="font-size:3em;"></i></a>
              <div class="clearfix"></div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="block a-fadeinR right_guanggao">
          <strong class="wt">预留位置</strong>
          <a href="javascript: void(0);"></a>
        </div>
        <!--<div class="block a-fadeinR" style="padding-top:10px;">
            <div class="widget about" style="margin-bottom: 0;">
                <strong class="wt">关键词搜索</strong>
                <form class="wc" action="search" method='get'>
                    <input type="text" class="search-text" name="keyword" value="" placeholder="请输入关键词"/>
                    <input type="submit" value="搜索" class="search-btn">

                    <div class="sep10"></div>
                </form>
            </div>
        </div>-->

        <div class="block a-fadeinR right_guanggao google300" data-url="/uploads/googlegg300/index.html">
          <strong class="wt">预留位置</strong>
        </div>

        <div class="block a-fadeinR">
          <div class="widget about">
            <strong class="wt">热门文章</strong>
            <div class="wc">
              <ul>

                <li><a href="post/mailto_link_html.htm">mailto: HTML e-mail 链接</a></li>

                <li><a href="post/css_input_uploadmh.htm">css input[type=file] 样式美化，input上传按钮美化</a></li>

                <li><a href="post/css_div_juzhong.htm">css的div垂直居中的方法，百分比div垂直居中</a></li>

                <li><a href="post/css_mh_ck_radio.htm">css input checkbox和radio样式美化</a></li>

                <li><a href="post/input_file_leixing.htm">HTML5的 input:file上传类型控制</a></li>

                <li><a href="post/js_setTimeout.htm">javascript的setTimeout()用法总结，js的setTimeout()方法</a></li>

                <li><a href="post/sublime_use.htm">前端神器-sublime text3插件安装及使用</a></li>

                <li><a href="post/css3_bg_multi.htm">css3实现一个div设置多张背景图片及background-image属性</a></li>

              </ul>
              <div class="sep10"></div>
            </div>
          </div>

        </div>


        <div class="block a-fadeinR">
          <div class="widget about">
            <strong class="wt">云标签</strong>
            <div class="wc">
              <div id="rotate">
                <a href="tag/javascript.htm">javascript</a>
                <a href="tag/js.htm">js</a>
                <a href="tag/input file.htm">input file</a>
                <a href="tag/ UEditor.htm">UEditor</a>
                <a href="tag/复文本框.htm">复文本框</a>
                <a href="tag/编辑器.htm">编辑器</a>
                <a href="tag/jsmart.htm">jsmart</a>
                <a href="tag/json.htm">json</a>
                <a href="tag/ant.htm">ant</a>
                <a href="tag/yuicompressor.htm">yuicompressor</a>
                <a href="tag/前端.htm">前端</a>
                <a href="tag/php.htm">php</a>
                <a href="tag/input美化.htm">input美化</a>
                <a href="tag/闭包.htm">闭包</a>
                <a href="tag/html.htm">html</a>
                <a href="tag/navigator.htm">navigator</a>
                <a href="tag/jquery.htm">jquery</a>
                <a href="tag/jqueryeasyUI.htm">jqueryeasyUI</a>
                <a href="tag/html5.htm">html5</a>
                <a href="tag/css3.htm">css3</a>
                <a href="tag/mongodb.htm">mongodb</a>
                <a href="tag/iframe.htm">iframe</a>
                <a href="tag/sass.htm">sass</a>
                <a href="tag/execCommand.htm">execCommand</a>
                <a href="tag/Cookie.htm">Cookie</a>
                <a href="tag/时间戳.htm">时间戳</a>
                <a href="tag/css hack.htm">css hack</a>
                <a href="tag/IE浏览器.htm">IE浏览器</a>
                <a href="tag/心得.htm">心得</a>
                <a href="tag/dedecms.htm">dedecms</a>
                <a href="tag/RegExp.htm">RegExp</a>
                <a href="tag/Emmet.htm">Emmet</a>
                <a href="tag/sublime.htm">sublime </a>
                <a href="tag/手机网站.htm">手机网站</a>
                <a href="tag/canvas.htm">canvas</a>
                <a href="tag/nodejs.htm">nodejs</a>
                <a href="tag/linux.htm">linux</a>
                <a href="tag/nginx.htm">nginx</a>
                <a href="tag/Ecshop.htm">Ecshop</a>
                <a href="tag/flash.htm">flash</a>
                <a href="tag/photoshop.htm">photoshop</a>
                <a href="tag/angularjs.htm">angularjs</a>
                <a href="tag/seo.htm">seo</a>
                <a href="tag/go语言.htm">go语言</a>
              </div>

              <div class="sep10"></div>
            </div>
          </div>

        </div>

        <div class="block a-fadeinR">
          <div class="widget about">
            <strong class="wt">友情链接</strong>
            <div class="wc">
              <ul class="friendship">
                <li><a href="index.htm">前端博客</a></li>
                <li><a href="index.htm">前端技术</a></li>
                <li><a href="index.htm">前端技术博客</a></li>
                <li><a href="index.htm">web前端开发</a></li>
                <li><a href="index.htm">sandy前端博客</a></li>
                <li><a href="index.htm">前端开发</a></li>

                <li>
                  <a href="http://www.jz21.net/">建站素材</a>
                </li>
                <li>
                  <a href="http://www.maiziedu.com/course/web/">web前端开发教程</a>
                </li>
                <li>
                  <a href="http://www.aseoe.com/">web前端</a>
                </li>

              </ul>
              <div class="sep10"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <Bottom slot="bottom"></Bottom>
  </div>
</template>

<script>
  import Top from '~/components/Top.vue';
  import Bottom from '~/components/Bottom.vue';
  import {log} from '@/assets/descriptors';


  export default {
    name: "index",
    components: {
      Top, Bottom
    },
    data() {
      return {}
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
  }
</script>

<style scoped>

</style>

