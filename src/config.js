const env = process.env.NODE_ENV

const config = {
  testing: {},
  development: {
    API_URL: 'http://localhost:8080',
  },
  production: {
    API_URL: 'https://inventi.studio',
  },
}

export default config[env]
