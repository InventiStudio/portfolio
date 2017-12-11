import { build } from 'src/../config'

const env = process.env.NODE_ENV

const config = {
  development: {
    API_URL: `http://localhost:${build.port}`,
  },
  production: {
    API_URL: 'https://inventi.studio',
  },
}

export default config[env]
