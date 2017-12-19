const files      = require('./files')
const bodyParser = require('body-parser')
const Feed       = require('feed')

const config = lang => ({
  title:    'InventiStudio Blog',
  id:       'https://inventi.studio/',
  image:    'https://inventi.studio/', // TODO: Add when image ready
  favicon:  'https://inventi.studio/static/favicon.ico',
  feedLinks: {
    json:   `https://inventi.studio/${lang}/feed/json`,
    atom:   `https://example.com/${lang}/feed/atom`,
    rss:    `https://example.com/${lang}/feed/rss`,
  },
  author: {
    name:   'InventiStudio',
    email:  'hello@inventi.studio',
    link:   'https://inventi.studio/',
  },
})

module.exports = function serve() {
  return [
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    function middleware(req, res) {
      const { lang, format } = req.params
      files.get(lang, (err, posts) => {
        if (err) return res.status(500).end()
        const conf = config(lang)
        const feed = new Feed(conf)
        posts.forEach((post) => {
          const additionalData = files.additionalData(req, post)
          feed.addItem({
            title:       post.data.title,
            description: post.data.description,
            date:        post.data.date,
            image:       additionalData.coverFullUrl,
            link:        additionalData.postFullUrl,
          })
        })
        switch (format) {
          case 'rss':
            return res.end(feed.rss2())
          case 'atom':
            return res.end(feed.atom1())
          case 'json':
            return res.end(feed.json1())
          default:
            return res.status(404).end()
        }
      })
    },
  ]
}

