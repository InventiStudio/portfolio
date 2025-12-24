<template>
  <div v-if="post" class="blog-post">
    <article>
      <header class="blog-post-header">
        <h1>{{ post.title }}</h1>
        <p class="blog-post-meta">
          <time :datetime="post.date">{{ post.date }}</time>
        </p>
        <p v-if="post.tags" class="blog-post-tags">{{ post.tags }}</p>
      </header>
      
      <div v-if="post.cover" class="blog-post-cover">
        <img :src="`/blog/${post.cover}`" :alt="post.title" />
      </div>
      
      <div class="blog-post-content" v-html="post.html"></div>
    </article>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useFetch(`/api/blog/${slug}`)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found',
  })
}

useHead({
  title: post.value.title,
  meta: [
    { name: 'description', content: post.value.description },
  ],
})
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.blog-post-header {
  margin-bottom: 2rem;
}

.blog-post-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.blog-post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.blog-post-tags {
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.blog-post-cover {
  margin-bottom: 2rem;
}

.blog-post-cover img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.blog-post-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.blog-post-content :deep(h2) {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.blog-post-content :deep(h3) {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.blog-post-content :deep(p) {
  margin-bottom: 1rem;
}

.blog-post-content :deep(pre) {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.blog-post-content :deep(code) {
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.blog-post-content :deep(img) {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}

.blog-post-content :deep(blockquote) {
  border-left: 4px solid #ddd;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #666;
  font-style: italic;
}

.blog-post-content :deep(a) {
  color: #0066cc;
  text-decoration: underline;
}

.blog-post-content :deep(a:hover) {
  color: #0052a3;
}

.blog-post-content :deep(ul),
.blog-post-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 2rem;
}

.blog-post-content :deep(li) {
  margin-bottom: 0.5rem;
}
</style>

