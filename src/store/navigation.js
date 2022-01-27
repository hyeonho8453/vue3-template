export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false,
    isShowRNB: false
  }),
getters: {

},
mutations: {
  setState(state, payload) {
    Object.keys(payload).forEach(key => {
      // state.isShow = true
      state[key] = payload[key]
      })
    }
  },
actions: {
  onNav({ commit }, name) {
    commit('setState', {
      [`isShow${name}`]: true
    })
  },
  offNav({ commit }, name) {
    commit('setState', {
      [`isShow${name}`]: false
    })
  }
  }
}
