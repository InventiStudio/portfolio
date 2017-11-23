const env = process.env.NODE_ENV

const config = {
  development: {
  },
  production: {
  },
}

export default config[env]
