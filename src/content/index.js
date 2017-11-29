import Vue from 'vue'
import VueI18n from 'vue-i18n'
import content from './content'
import en from './i18n/en'
import pl from './i18n/pl'

function join(translations) {
  return Object.assign({}, content, translations)
}

const messages = {
  en: join(en),
  pl: join(pl),
}

const defaultLocale  = 'en'
const selectedLocale = 'en' // navigator.language

Vue.use(VueI18n)

export default new VueI18n({
  silentTranslationWarn: true,
  locale: Object.keys(messages).find(key => key === selectedLocale) || defaultLocale,
  fallbackLocale: Object.keys(messages).find(key => key === selectedLocale) || defaultLocale,
  messages,
})
