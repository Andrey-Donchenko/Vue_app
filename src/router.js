import Vue from 'vue'
import Router from 'vue-router'

import store from './store/'
import Login from './components/Login'
import MainPage from './components/MainPage'
import News from './components/News'
import Profile from './components/Profile'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'main',
      path: '/',
      component: MainPage,
      redirect: {
        name: 'news'
      },
      children: [
        {
          name: 'news',
          path: 'news',
          component: News
        }, {
          name: 'profile',
          path: 'profile',
          component: Profile,
          beforeEnter: (to, from, next) => {
            if (store.getters.isLogin) {
              next()
            } else if (from.name) {
              store.commit('setToastMessage', 'you must log in')
              next(false)
            } else {
              next('/')
            }
          }
        }, {
          name: 'login',
          path: '/login',
          component: Login
        }
      ]
    }
  ]
})
