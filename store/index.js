export const state = () => {
    return {
        env: null,
        userData: "", //用户信息
        Token: "",
        pathName: "index"
    };
};
export const mutations = {
    // SET_WINDOW(state, value) {
    //     state.window = value;
    // },
};
export const getters = {
    env(state) {
        return state.env;
    },
    token(state) {
        return state.Token;
    }
};
export const actions = {
    /**
     * 保存用户TOKEN
     * @param commit
     * @param value
     */
    saveToken({ commit }, value) {
        commit("SET_TOKEN", value);
    }
};
