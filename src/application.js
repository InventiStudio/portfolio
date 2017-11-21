// TODO: Investigate on importing only needed bits, by using core-js, instead whole bable-polyfill:
// https://babeljs.io/docs/usage/polyfill/
// https://github.com/zloirock/core-js#commonjs
import 'babel-polyfill'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueHead from 'vue-head'
import App from 'src/App'
import router from 'src/router'
import Modal from 'components/Modal/Modal'
import Icon from 'components/Icon/Icon'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueHead)

Vue.component('Modal', Modal)
Vue.component('Icon', Icon)

// http://varun.ca/icon-component/
const files = require.context('!svg-sprite-loader!./assets/icons', false, /.*\.svg$/)
files.keys().forEach(files)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
