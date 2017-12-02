import R from 'ramda'


function generateAlternateLinks(instance, languages, defaultLang) {
  return ['x-default', ...languages].map(language => ({
    rel:      'alternate',
    hreflang: language,
    href:     `${window.location.origin}${instance.$router.resolve(Object.assign({}, instance.$route, {
      params: { lang: language === 'x-default' ? defaultLang : language } },
    )).href}`,
  }))
}

function generateBreadcrumbJson(instance, pages) {
  return pages
    ? JSON.stringify({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: pages.map(({ name, route, image }, position) => ({
        '@type': 'ListItem',
        position: position + 1,
        item: {
          '@id': `${window.location.origin}${route.href}`,
          name,
          image,
        },
      })),
    })
    : ''
}

function parseTitle(sitename, title) {
  return title ? `${title} - ${sitename}` : sitename
}

export default {
  getConfig(customParameters = {}) {
    return R.merge({
      // Default config
      sitename:    () => 'IS',
      title:       () => undefined,
      description: () => 'Default description',
      image:       () => 'https://unsplash.it/810/800?image=10',
      breadcrumb:  () => undefined,
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
          inner: parseTitle(c.sitename.call(this), c.title.call(this)),
          separator: ' ',
          complement: '',
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
          { name: 'twitter:title',              content: parseTitle(c.sitename.call(this), c.title.call(this)) },
          { name: 'twitter:image',              content: c.image.call(this) },
          { name: 'twitter:description',        content: c.description.call(this) },
          // Google+
          { itemprop: 'name',                   content: parseTitle(c.sitename.call(this), c.title.call(this)) },
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
        return [
          ...generateAlternateLinks(this, ['en', 'pl'], 'en'),
        ]
      },
      script() {
        return [
          { type: 'application/ld+json', inner: generateBreadcrumbJson(this, c.breadcrumb.call(this)) },
        ]
      },
    }, additionalMetaTags)
  },
}
