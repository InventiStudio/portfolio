export default {
  regex: {
    lastUrlBackslash: /(?!^)\/(?=(\?|$|#))/,
  },
  sectionIds: {
    home: {
      services: 'home__services',
      testimonials: 'home__testimonials',
      posts: 'home__posts',
    },
  },
  api: {
    mailer: '/api/mailer',
    blog: '/api/blog',
  },
}
