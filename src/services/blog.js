import constants from 'src/constants'
import api from 'services/api'
import i18n from 'src/content'

export async function getAllBlogPosts() {
  try {
    return await api.get(`${constants.api.blog}/${i18n.locale}`)
  } catch (err) {
    console.warn('blog getAll ', { err })
    throw err
  }
}

export async function getBlogPostBySlug(slug) {
  try {
    return await api.get(`${constants.api.blog}/${i18n.locale}/${slug}`)
  } catch (err) {
    console.warn('blog getBySlug ', { err })
    throw err
  }
}
