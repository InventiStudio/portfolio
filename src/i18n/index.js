import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './translations/en'
import pl from './translations/pl'

const messages = {
  en,
  pl,
}

const defaultLocale  = 'en'
const selectedLocale = 'en' // navigator.language

Vue.use(VueI18n)

export default new VueI18n({
  silentTranslationWarn: true,
  locale: Object.keys(messages).find(key => key === selectedLocale) || defaultLocale,
  messages,
})
