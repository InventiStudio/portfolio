const env = process.env.NODE_ENV

const config = {
  development: {
    API_URL: 'http://localhost:4000',
  },
  production: {
    API_URL: 'http://localhost:4000',
  },
}

export default config[env]
