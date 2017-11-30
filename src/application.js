// TODO: Investigate on importing only needed bits, by using core-js, instead whole bable-polyfill:
// https://babeljs.io/docs/usage/polyfill/
// https://github.com/zloirock/core-js#commonjs
import 'babel-polyfill'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueHead from 'vue-head'
import VueI18n from 'vue-i18n'
import App from 'src/App'
import router from 'src/router'
import Card from 'components/Card/Card'
import Icon from 'components/Icon/Icon'
import Modal from 'components/Modal/Modal'
import SocialLinks from 'components/SocialLinks/SocialLinks'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueHead)
Vue.use(VueI18n)

Vue.component('Card', Card)
Vue.component('Icon', Icon)
Vue.component('Modal', Modal)
Vue.component('SocialLinks', SocialLinks)

// http://varun.ca/icon-component/
const files = require.context('!svg-sprite-loader!./assets/icons', false, /.*\.svg$/)
files.keys().forEach(files)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
