export default {
  setUserId(state, data) {
    state.userId = data.id
  },

  resetUser(state) {
    state.userId = null
    state.user.data = {}
  }
}
