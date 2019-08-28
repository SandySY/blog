export const state = () => {
    return {
        width: 0,
        height: 0,
        scrollTop:0
    };
};
export const mutations = {
    SET_WINDOW(state, { width, height }) {
        state.width = width;
        state.height = height;
    },
    SET_WINDOW_SCROLLTOP(state, { scrollTop }) {
        state.scrollTop = scrollTop;
    }
};
export const getters = {
    height(state) {
        return state.height;
    },
    width(state) {
        return state.width;
    },
    scrollTop(state) {
        return state.scrollTop;
    }
};
export const actions = {

  /**
   * 重置页面滚动
   * @param commit
   */
  resetScrollTop({ commit }) {
    commit("SET_WINDOW_SCROLLTOP", { scrollTop:0 });
  },
};
