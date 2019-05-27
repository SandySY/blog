export default function({ store }) {
  console.warn("KeepLogin", store);
    //有初始化错误标记的
    /*if (store.getters.initError && store.getters.token) {
        store
            .dispatch("refreshUser")
            .then(() => {
                //刷新用户信息成功后,刷新用户首页设置
                store.dispatch("refreshSetting");
                store.dispatch("wallet/index/queryWallet");
                //初始化失败标记重置为false
                store.commit("SET_INIT_ERROR", false);
            })
            .catch(() => {
            //如果请求失败什么都不改变
        });
    }*/
}
