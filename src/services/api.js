import axios from 'axios'
import config from 'src/config'

function api() {
  const instance = axios.create({
    baseURL: config.API_URL,
  })

  instance.defaults.headers.common['Content-Type'] = 'application/json'
  instance.defaults.headers.post['Content-Type'] = 'application/json'
  instance.defaults.headers.patch['Content-Type'] = 'application/json'
  instance.defaults.headers.put['Content-Type'] = 'application/json'

  function get(path, opts = {}) {
    return instance.get(path, opts)
  }

  function post(path, body = {}) {
    return instance.post(path, JSON.stringify(body))
  }

  function patch(path, body = {}) {
    return instance.patch(path, JSON.stringify(body))
  }

  function remove(path, body = {}) {
    return instance({
      method: 'DELETE',
      url: path,
      data: JSON.stringify(body),
    })
  }

  function setHeader(header, value) {
    instance.defaults.headers.common[header] = value
  }

  return {
    get,
    post,
    patch,
    remove,
    setHeader,
  }
}

export default api()
