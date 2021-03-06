import 'babel-polyfill'
import 'es6-promise/auto'
import Vue from 'vue'

window.Headers = function Headers() {}
window.fetch = () => (new Promise(r => r({ ok: true, status: 200, json: () => {} })))

Vue.config.productionTip = false
Vue.config.ignoredElements = ['Card', 'Icon', 'icon']

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/(?!application\.js$).+\.(js|vue)$/i)
srcContext.keys().forEach(srcContext)
