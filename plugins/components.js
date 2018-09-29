import Vue from "vue";
import Components from "~/components";

console.log("开始载入Vue组件");
for (const name in Components) {
  if (Components.hasOwnProperty(name)) {
    Vue.component(name, Components[name]);
  }
}
