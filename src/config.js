const env = process.env.NODE_ENV

const config = {
  development: {},
  production: {
    API_URL: 'https://inventi.studio',
  },
}

export default config[env]
