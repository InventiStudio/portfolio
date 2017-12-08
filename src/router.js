import Vue from 'vue'
import VueRouter from 'vue-router'
import head from 'src/head'
import i18n from 'src/content'
import constants from 'src/constants'
import { stopRootLoader } from 'services/events'

Vue.use(VueRouter)

const commonOptions = {
  // It helps to get rid of slash-ended routes (for SEO purposes)
  pathToRegexpOptions: { strict: true },
}

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
function resolver(resolveFunction) {
  return function component(resolve) {
    resolveFunction(resolve).then(stopRootLoader)
  }
}
const routes = [
  {
    path: '/:lang',
    component: Vue.component('Main', { template: '<transition name="fade"><router-view mode="out-in"></router-view></transition>' }),
    ...commonOptions,
    children: [
      {
        path: '',
        name: 'Home',
        component: resolver(resolve => require(['pages/Home/Home'], resolve)),
        ...commonOptions,
      },
      {
        path: 'services',
        name: 'Services',
        component: resolver(resolve => require(['pages/Services/Services'], resolve)),
        ...commonOptions,
      },
      {
        path: 'services/vue-front-end',
        name: 'Vue',
        component: resolver(resolve => require(['pages/Vue/Vue'], resolve)),
        ...commonOptions,
      },
      {
        path: 'services/node-back-end',
        name: 'Node',
        component: resolver(resolve => require(['pages/Node/Node'], resolve)),
        ...commonOptions,
      },
      {
        path: 'services/ui-ux-design',
        name: 'Design',
        component: resolver(resolve => require(['pages/Design/Design'], resolve)),
        ...commonOptions,
      },
      {
        path: 'estimate-project',
        name: 'Estimate',
        component: resolver(resolve => require(['pages/Estimate/Estimate'], resolve)),
        ...commonOptions,
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
  // Refex for detecting slash-ended path
  // Helper for redirections
  const defaultRoute = router.resolve({
    name: 'Home',
    params: { lang: to.params.lang || from.params.lang || i18n.fallbackLocale },
    exact: true,
  }).href.replace(constants.regex.lastUrlBackslash, '')
  // When language is not specified
  if (to.path === '/') {
    head.responseCode.code = 302
    head.responseCode.location = `${window.location.origin}${defaultRoute}`
    next({ path: defaultRoute, replace: true })
  // When page is not found
  } else if (to.name === 'Error404') {
    head.responseCode.code = 404
    next({ path: defaultRoute, replace: true })
  // When language has been changed
  } else if (to.params.lang !== i18n.locale) {
    if (Object.keys(i18n.messages).find(locale => to.params.lang === locale)) {
      i18n.locale = to.params.lang
      next()
    } else {
      head.responseCode.code = 404
      next({ path: defaultRoute, params: { lang: i18n.fallbackLocale }, replace: true })
    }
  } else if (to.path.match(constants.regex.lastUrlBackslash)) {
    head.responseCode.code = 301
    head.responseCode.location = `${window.location.origin}${to.path.replace(constants.regex.lastUrlBackslash, '')}`
    next()
  } else {
    next()
  }
})

// This is helper for router-link component that allows
// to write links without repeating current language all
Vue.mixin({
  methods: {
    $routeByName(name, opts = {}) {
      const { route } = this.$router.resolve({ name, params: { lang: i18n.locale }, exact: true, ...opts })
      return {
        path: route.path.replace(constants.regex.lastUrlBackslash, ''),
        ...opts,
      }
    },
  },
})

export default router
