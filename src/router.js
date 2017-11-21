import Vue from 'vue'
import VueRouter from 'vue-router'
import head from 'src/head'

Vue.use(VueRouter)

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const routes = [
  {
    path: '/',
    name: 'Homepage',
    component(resolve) {
      require(['pages/Homepage/Homepage'], resolve)
    },
  },
  {
    path: '/services',
    name: 'Services',
    component(resolve) {
      require(['pages/Services/Services'], resolve)
    },
  },
]
/* eslint-enable global-require */
/* eslint-enable import/no-dynamic-require */

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Error404') {
    head.responseCode.code = 404
    next('/')
  }
  next()
})

export default router
