import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { differenceInMonths, formatDistance, format } from 'date-fns'
import { enUS } from 'date-fns/locale'

interface BlogPost {
  slug: string
  title: string
  tags: string
  cover: string
  miniCover: string
  date: string
  formattedDate: string
  description: string
  isProject: boolean
}

function getFormattedDate(unformattedDate: string): string {
  return differenceInMonths(new Date(), new Date(unformattedDate)) > 0
    ? format(new Date(unformattedDate), 'PP', { locale: enUS })
    : formatDistance(new Date(unformattedDate), new Date(), { addSuffix: true, locale: enUS })
}

export default defineEventHandler((): BlogPost[] => {
  const blogPostsDir = join(process.cwd(), 'blog-posts', 'en')
  
  const files = readdirSync(blogPostsDir)
    .filter(filename => filename.endsWith('.md'))
  
  const posts = files.map(filename => {
    const filePath = join(blogPostsDir, filename)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)
    
    return {
      slug: data.slug,
      title: data.title,
      tags: data.tags,
      cover: data.cover,
      miniCover: data.miniCover,
      date: data.date,
      formattedDate: getFormattedDate(data.date),
      description: data.description,
      isProject: data.isProject || false,
    }
  })
  
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
})

