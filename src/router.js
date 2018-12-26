/*eslint-disable*/
import Vue from 'vue'
import Router from 'vue-router'
// import sendMsg from '_views/sendMsg';
// import login from '_views/login';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '_views/login')
    },
    {
      path: '/send-msg',
      name: 'send-msg',
      component: () => import(/* webpackChunkName: "login" */ '_views/send-msg')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '_views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ '_views/register')
    },
    {
      path: '/list-item',
      name: 'list-item',
      component: () => import(/* webpackChunkName: "about" */ '_views/list-item')
    },
    {
      path: '/item',
      name: 'item',
      component: () => import(/* webpackChunkName: "about" */ '_views/item')
    },
  ]
})
