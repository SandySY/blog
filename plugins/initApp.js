export default function ({store, next, app, redirect}) {

  store.commit("window/SET_WINDOW", {
    width: window.innerWidth,
    height: window.innerHeight
  });
  window.onscroll = function () {
    store.commit("window/SET_WINDOW_SCROLLTOP", {
      scrollTop: document.documentElement.scrollTop || document.body.scrollTop
    });
  };
}
