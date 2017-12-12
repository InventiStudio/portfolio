import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import i18n from 'src/content'
import router from 'src/router'
import R from 'ramda'
import head from 'src/head'

router.mode = 'abstract'
const initialState = R.clone(router.history.current)

Vue.use(VueRouter)
Vue.use(VueI18n)

describe('Router', () => {
  let vm

  function expectRouteAfterPush(to, callback) {
    vm.$router.afterEach(callback)
    vm.$router.push(to)
  }

  beforeEach(() => {
    router.history.current = initialState
    vm = new Vue({
      i18n,
      router: R.clone(router),
      el: document.createElement('div'),
      render: h => h('router-view'),
    })
  })

  it('redirects to default language when attempting to enter root url', (done) => {
    expectRouteAfterPush({ path: '/' }, (to) => {
      expect(to.path).to.equal(`/${i18n.fallbackLocale}`)
      expect(head.responseCode.code).to.equal(302)
      expect(head.responseCode.location).to.equal(`${window.location.origin}/${i18n.fallbackLocale}`)
      done()
    })
  })

  it('redirects to default language when passed language do not exist', (done) => {
    expectRouteAfterPush({ path: '/nope' }, (to) => {
      expect(to.path).to.equal(`/${i18n.fallbackLocale}`)
      expect(head.responseCode.code).to.equal(404)
      expect(head.responseCode.location).to.equal(`${window.location.origin}/${i18n.fallbackLocale}`)
      done()
    })
  })

  it('redirects to default path when page is not found', (done) => {
    expectRouteAfterPush({ path: '/en/nope' }, (to) => {
      expect(to.path).to.equal(`/${i18n.fallbackLocale}`)
      expect(head.responseCode.code).to.equal(404)
      done()
    })
  })

  it('removes last backslash from lang-level url', (done) => {
    expectRouteAfterPush({ path: '/en/' }, (to) => {
      expect(to.path).to.equal('/en')
      expect(head.responseCode.code).to.equal(301)
      expect(head.responseCode.location).to.equal(`${window.location.origin}/en`)
      done()
    })
  })

  it('removes last backslash from subpage-level url', (done) => {
    expectRouteAfterPush({ path: '/en/services/' }, (to) => {
      expect(to.path).to.equal('/en/services')
      expect(head.responseCode.code).to.equal(301)
      expect(head.responseCode.location).to.equal(`${window.location.origin}/en/services`)
      done()
    })
  })
})
