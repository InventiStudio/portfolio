import 'whatwg-fetch'
// TODO: Investigate on importing only needed bits, by using core-js, instead whole bable-polyfill:
// https://babeljs.io/docs/usage/polyfill/
// https://github.com/zloirock/core-js#commonjs
import 'babel-polyfill'
import Vue from 'vue'
import VueAsyncData from 'vue-async-data'
import Vuelidate from 'vuelidate'
import VueHead from 'vue-head'
import { sync } from 'vuex-router-sync'
import App from 'src/App'
import router from 'src/router'
import store from 'src/store'
import Modal from 'components/Modal/Modal'
import Icon from 'components/Icon/Icon'
import Navbar from 'components/Navbar/Navbar'

Vue.config.productionTip = false

Vue.use(VueAsyncData)
Vue.use(Vuelidate)
Vue.use(VueHead)

Vue.component('modal', Modal)
Vue.component('Icon', Icon)
Vue.component('Navbar', Navbar)

sync(store, router)

// http://varun.ca/icon-component/
const files = require.context('!svg-sprite-loader!./assets/icons', false, /.*\.svg$/)
files.keys().forEach(files)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
