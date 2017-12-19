const files  = require('read-dir-files')
const path   = require('path')
const matter = require('gray-matter')

const fullUrl = (req, path) => `${req.protocol}://${req.get('host')}${path}`

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

  additionalData(req, { lang, data }) {
    return {
      coverFullUrl: fullUrl(req, `/static/blog/${data.cover}`),
      postFullUrl:  fullUrl(req, `/${lang}/blog/${data.slug}`),
    }
  },
}