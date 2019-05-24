import q from 'q'
import axios from 'axios'

import store from '../store/'

export function apiHandle(method, path, data) {
  const deferred = q.defer()
  store.commit('toggleLoader')
  axios[method](path, data)
    .then(res => {
      store.commit('toggleLoader')
      deferred.resolve(res);
    })
    .catch(err => {
      store.commit('toggleLoader')
      store.commit('errorHandle', err)
      deferred.reject(err)
    })
  return deferred.promise
}
