import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: false,
    userId: sessionStorage['user-id'] || null,
    user: {
      data: {}
    },
    news: {
      data: []
    },
    toast: '',
    errors: null
  },
  getters: {
    isLogin: state => !!state.userId
  },
  mutations,
  actions
})
