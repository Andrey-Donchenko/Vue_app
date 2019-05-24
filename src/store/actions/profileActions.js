import { getUserData } from '../../API/profile'
import { router } from '../../router'

export default {
  getUserData({ commit, state }) {
    getUserData(state.userId)
      .then(res => {
        if (res.data.status === 'ok') {
          commit('setUserData', res.data.data)
        } else {
          commit('setToastMessage', res.data.message)
          router.push('/')
        }
      })
  }
}
