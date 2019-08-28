import Vue from "vue";
import Components from "@/components";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'mini'});

console.log("开始载入Vue组件");
for (const name in Components) {
  if (Components.hasOwnProperty(name)) {
    Vue.component(name, Components[name]);
  }
}

console.log("Vue组件已经载入");

/*
export default ({store}) => {
  /!**
   * 环境判断全局混入
   *!/
  Vue.mixin({
    computed: {
      /!**
       * env环境变量
       * 在任何vue代码中可以使用 this.env 来进行访问
       * 动态计算不允许手动修改
       * app 代表在 hbuilder程序中
       * wx-app 代表在微信小程序中
       * wx 代表在微信浏览器中
       * 其他情况全部视为在浏览器中打开
       * @returns {string}
       *!/
      env() {
        /!**
         * 如果是有PLUS则为APP内
         *!/
        if (mui.os.plus) {
          return "app";
        } else {
          /!**
           * 通过window.__wxjs_environment
           * 判断是否在小程序内
           *!/
          if (window.__wxjs_environment === "miniprogram") {
            return "wx-app";
          }
          /!**
           * 判断是否在微信内
           *!/
          if (
            navigator.userAgent
              .toLowerCase()
              .indexOf("micromessenger") >= 0
          ) {
            return "wx";
          }
          return "wx";
        }
      },
      /!**
       * 判断是否是iphoneX并运行在微信小程序里
       * @returns {boolean}
       *!/
      isWxIphoneX() {
        if (
          window.wxdeviceinfo &&
          window.wxdeviceinfo.indexOf("iPhone X") !== -1
        ) {
          return true;
        }
        return false;
      }
    }
  });
  if (mui.os.plus) {
    return store.commit("SET_ENV", "app");
  } else {
    if (window.__wxjs_environment === "miniprogram") {
      return store.commit("SET_ENV", "wx-app");
    }
    if (navigator.userAgent.toLowerCase().indexOf("micromessenger") >= 0) {
      return store.commit("SET_ENV", "wx");
    }
    return store.commit("SET_ENV", "wx");
  }
};*/
