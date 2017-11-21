import Vue from 'vue'
import VueRouter from 'vue-router'
import head from 'src/head'

Vue.use(VueRouter)

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const routes = [
  {
    path: '/',
    name: 'Home',
    component(resolve) {
      require(['pages/Home/Home'], resolve)
    },
  },
  {
    path: '_button',
    name: 'Button',
    component(resolve) {
      require(['src/example-components/Button/Button'], resolve)
    },
  },
  {
    path: '_form',
    name: 'Form',
    component(resolve) {
      require(['src/example-components/Form/Form'], resolve)
    },
  },
  {
    path: '_typography',
    name: 'Typography',
    component(resolve) {
      require(['src/example-components/Typography/Typography'], resolve)
    },
  },
  {
    path: '*',
    name: 'Error404',
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
