import constants from 'src/constants'
import api from 'services/api'
import i18n from 'src/content'

function decorateWithCoverPath({ html, data }) {
  return {
    html,
    data: {
      ...data,
      coverPath: `${window.location.origin}/${constants.blog.imagesDir}/${data.cover}`,
    },
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

export function getFormattedDate(unformattedDate) {
  const date = new Date(unformattedDate)
  let dd = date.getDate()
  let mm = date.getMonth() + 1
  const yyyy = date.getFullYear()
  if (dd < 10) dd = `0${dd}`
  if (mm < 10) mm = `0${mm}`
  return `${yyyy}-${mm}-${dd}`
}
