function storage() {
  function get(key) {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  function set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  function remove(key) {
    window.localStorage.removeItem(key)
  }

  return {
    get,
    set,
    remove,
  }
}

export default storage()
