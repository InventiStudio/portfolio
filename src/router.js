import Vue from 'vue'
import VueRouter from 'vue-router'
import head from 'src/head'
import i18n from 'src/content'

Vue.use(VueRouter)

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const routes = [
  {
    path: '/:lang',
    component: Vue.component('Main', { template: '<transition name="fade"><router-view mode="out-in"></router-view></transition>' }),
    children: [
      {
        path: '',
        name: 'Home',
        component(resolve) {
          require(['pages/Home/Home'], resolve)
        },
      },
      {
        path: 'services',
        name: 'Services',
        component(resolve) {
          require(['pages/Services/Services'], resolve)
        },
      },
      {
        path: 'services/vue-front-end',
        name: 'Vue',
        component(resolve) {
          require(['pages/Vue/Vue'], resolve)
        },
      },
      {
        path: 'services/node-back-end',
        name: 'Node',
        component(resolve) {
          require(['pages/Node/Node'], resolve)
        },
      },
      {
        path: 'services/ui-ux-design',
        name: 'Design',
        component(resolve) {
          require(['pages/Design/Design'], resolve)
        },
      },
    ],
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
  // Helper for redirections
  const defaultRoute = {
    name: 'Home',
    params: { lang: to.params.lang || from.params.lang || i18n.fallbackLocale },
  }
  // When language is not specified
  if (to.path === '/') {
    head.responseCode.code = 302
    head.responseCode.location = `${window.location.origin}${router.resolve(defaultRoute).href}`
    next({ ...defaultRoute, replace: true })
  // When page is not found
  } else if (to.name === 'Error404') {
    head.responseCode.code = 404
    next({ ...defaultRoute, replace: true })
  // When language has been changed
  } else if (to.params.lang !== i18n.locale) {
    if (Object.keys(i18n.messages).find(locale => to.params.lang === locale)) {
      i18n.locale = to.params.lang
      next()
    } else {
      head.responseCode.code = 404
      next({ ...defaultRoute, params: { lang: i18n.fallbackLocale }, replace: true })
    }
  } else {
    next()
  }
})

// This is helper for router-link component that allows
// to write links without repeating current language all
Vue.mixin({
  methods: {
    $routeByName(name, opts = {}) {
      return Object.assign({}, { name, params: { lang: i18n.locale } }, opts)
    },
  },
})

export default router
