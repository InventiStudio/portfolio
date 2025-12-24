import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import footnote from 'markdown-it-footnote'
import linkAttributes from 'markdown-it-link-attributes'

const markdown = new MarkdownIt({
  html: true,
})
  .use(footnote)
  .use(linkAttributes, {
    attrs: {
      target: '_blank',
      rel: 'noopener',
    },
  })

interface BlogPostDetail {
  slug: string
  title: string
  tags: string
  cover: string
  miniCover: string
  date: string
  description: string
  isProject: boolean
  html: string
}

export default defineEventHandler((event): BlogPostDetail => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug is required',
    })
  }
  
  const blogPostsDir = join(process.cwd(), 'blog-posts', 'en')
  
  const files = readdirSync(blogPostsDir)
    .filter(filename => filename.endsWith('.md'))
  
  for (const filename of files) {
    const filePath = join(blogPostsDir, filename)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    
    if (data.slug === slug) {
      const html = markdown.render(content).replace(/\/static\/blog\//g, '/blog/')
      
      return {
        slug: data.slug,
        title: data.title,
        tags: data.tags,
        cover: data.cover,
        miniCover: data.miniCover,
        date: data.date,
        description: data.description,
        isProject: data.isProject || false,
        html,
      }
    }
  }
  
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found',
  })
})

