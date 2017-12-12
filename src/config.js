const env = process.env.NODE_ENV

const config = {
  testing: {},
  development: {},
  production: {
    API_URL: 'https://inventi.studio',
  },
}

export default config[env]
