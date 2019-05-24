export default {
  toggleLoader(state) {
    state.loader = !state.loader
  },

  errorHandle(state, data) {
    state.errors = data
  },

  setToastMessage(state, data) {
    state.toast = data
  },

  resetToastMessage(state) {
    state.toast = ''
  }
}
