import { getNews } from '../../API/news'

export default {
  getNews({ commit }) {
    getNews()
      .then(res => {
        if (res.data.status === 'ok') {
          commit('setNews', res.data.data)
        } else {
          commit('setToastMessage', res.data.message)
        }
      })
  }
}
