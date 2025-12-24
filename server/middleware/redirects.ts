export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  
  if (url.pathname.startsWith('/en/blog/')) {
    const newPath = url.pathname.replace('/en/blog/', '/blog/')
    return sendRedirect(event, newPath, 301)
  }
  
  if (url.pathname.startsWith('/pl/blog/')) {
    const newPath = url.pathname.replace('/pl/blog/', '/blog/')
    return sendRedirect(event, newPath, 301)
  }
})

