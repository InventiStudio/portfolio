import constants from 'src/constants'
import api from 'services/api'
import i18n from 'src/content'

function decorateWithCoverPath(post) {
  return {
    coverPath: `${window.location.origin}/${constants.blog.imagesDir}/${post.data.cover}`,
    ...post,
  }
}

export async function getAllBlogPosts() {
  try {
    const posts = await api.get(`${constants.api.blog}/${i18n.locale}`)
    return posts.map(decorateWithCoverPath)
  } catch (err) {
    console.warn('blog getAll ', { err })
    throw err
  }
}

export async function getBlogPostBySlug(slug) {
  try {
    const post = await api.get(`${constants.api.blog}/${i18n.locale}/${slug}`)
    return decorateWithCoverPath(post)
  } catch (err) {
    console.warn('blog getBySlug ', { err })
    throw err
  }
}

