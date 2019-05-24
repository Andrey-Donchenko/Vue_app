import { logIn } from '../../API/auth'
import { router } from '../../router'

export default {
  logIn({ commit }, data) {
    logIn(data)
      .then(res => {
        if (res.data.status === 'ok') {
          commit('setUserId', res.data.data)
          sessionStorage.setItem('user-id', res.data.data.id)
          router.push('/profile')
        } else {
          commit('setToastMessage', res.data.message)
        }
      })
  },

  logOut({ commit }) {
    commit('resetUser')
    sessionStorage.clear()
    router.push('/')
  },
}
