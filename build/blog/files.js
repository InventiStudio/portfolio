const files               = require('read-dir-files')
const path                = require('path')
const matter              = require('gray-matter')
const differenceInMonths  = require('date-fns/differenceInMonths')
const formatDistance      = require('date-fns/formatDistance')
const format              = require('date-fns/format')
const locales             = require('date-fns/locale')

const fullUrl = (env, req, path) => (env === 'production'
  ? `https://inventi.studio${path}`
  : `${req.protocol}://${req.get('host')}${path}`)

function getFormattedDate(unformattedDate, lang) {
  switch (lang) {
    case 'en':
      return differenceInMonths(new Date(), new Date(unformattedDate)) > 0
        ? format(new Date(unformattedDate), 'PP', { locale: locales.enUS })
        : formatDistance(new Date(unformattedDate), new Date(), { addSuffix: true, locale: locales.enUS })
    // TODO: There is no `pl` locale yet, as of 2.0.0alpha.27 version!
    case 'pl':
      return format(new Date(unformattedDate), 'dd/MM/YYYY', { awareOfUnicodeTokens: true })
    default:
      throw new Error(`${lang} is not supported`)
  }
}

module.exports = {
  directory(lang) { return path.join(__dirname, '../../', 'blog-posts', lang) },

  get(lang, callback) {
    const dir = this.directory(lang)
    files.list(dir, (err, list) => {
      if (err) return callback(err)
      const result = list
        .filter(filename => filename.endsWith('.md'))
        .map(filename => filename.replace(dir, ''))
        .map(filename => matter.read(path.join(dir, filename)))
        .map(({ content, data }) => ({ lang, data, md: content }))
        .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
      return callback(undefined, result)
    })
  },

  additionalData(env, req, { lang, data }) {
    return {
      coverFullUrl:       fullUrl(env, req, `/static/blog/${data.cover}`),
      miniCoverFullUrl:   fullUrl(env, req, `/static/blog/${data.miniCover}`),
      postFullUrl:        fullUrl(env, req, `/${lang}/blog/${data.slug}`),
      formattedDate:      getFormattedDate(data.date, lang),
    }
  },
}
