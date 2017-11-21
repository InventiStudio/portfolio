import R from 'ramda'

export default {
  getConfig(customParameters = {}) {
    return R.merge({
      // Default config
      sitename:    () => 'Default sitename',
      title:       () => '',
      description: () => 'Default description',
      image:       () => 'https://unsplash.it/810/800?image=10',
    }, customParameters)
  },

  responseCode: {
    code:     undefined,
    location: undefined,
  },

  generatePrerenderResponseCodeTags() {
    const result = []
    if (this.responseCode.code)     result.push({ name: 'prerender-status-code', content: this.responseCode.code })
    if (this.responseCode.location) result.push({ name: 'prerender-header',      content: `Location: ${this.responseCode.location}` })
    return result
  },

  set(customParameters = {}, additionalMetaTags = {}) {
    const c         = this.getConfig(customParameters)
    const prerender = this.generatePrerenderResponseCodeTags.bind(this)
    return R.merge({
      title() {
        return {
          inner:      c.title.call(this),
          separator:  '-',
          complement: c.sitename.call(this),
        }
      },
      meta() {
        return [
          // Global
          { name: 'description',                content: c.description.call(this), id: '__head-description' },
          { name: 'application-name',           content: c.sitename.call(this) },
          { name: 'apple-mobile-web-app-title', content: c.sitename.call(this) },
          { name: 'lang',                       content: 'pl' },
          // Twitter
          { name: 'twitter:title',              content: `${c.title.call(this)} - ${c.sitename.call(this)}` },
          { name: 'twitter:image',              content: c.image.call(this) },
          { name: 'twitter:description',        content: c.description.call(this) },
          // Google+
          { itemprop: 'name',                   content: `${c.title.call(this)} - ${c.sitename.call(this)}` },
          { itemprop: 'description',            content: c.description.call(this) },
          { itemprop: 'image',                  content: c.image.call(this) },
          // Facebook
          { property: 'og:title',               content: c.title.call(this) },
          { property: 'og:site_name',           content: c.sitename.call(this) },
          { property: 'og:image',               content: c.image.call(this) },
          { property: 'og:description',         content: c.description.call(this) },
        ].concat(
          prerender(),
        )
      },
      link() {
        return []
      },
    }, additionalMetaTags)
  },
}
