import config from 'src/config'

function api(baseUrl) {
  async function post(path, body) {
    try {
      return await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(body),
      })
    } catch (err) {
      console.warn(err)
      throw err
    }
  }

  return { post }
}

export default api(config.API_URL)
