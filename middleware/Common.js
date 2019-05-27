//此中间件用于执行某些fixed方法来修补一些问题
// import { MessageBox } from "mint-ui";
// import Loading from "@/components/Common/Loading";
export default function({store}) {
    //此操作用于安卓机或浏览器在未关闭MessageBox时点击了返回按钮或后退造成的未消失问题
    // MessageBox.close();
    // Loading.close();
  //跳转页面后重置scrollTop
  store.dispatch("window/resetScrollTop");
}
