<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="content">
          <img 
            src="/logo-trans-white.svg" 
            alt="InventiStudio" 
            class="logo"
          />
          
          <h1 class="title">
            <span class="title-brand">InventiStudio</span> Portfolio
          </h1>
          
          <p class="description">
            <a href="https://inventi.studio" target="_blank" class="link">InventiStudio</a> 
            is a web development agency based in Wrocław, Poland. We excel at building modern web 
            applications, providing Vue.js front-end, Node.js back-end and UI/UX design services 
            for enterprises, companies and startups. 
            <a href="mailto:hello@inventi.studio" class="link">Get in touch with us</a>!
          </p>
        </div>
      </div>
    </section>

    <section class="blog-section">
      <div class="container">
        <h2 class="section-title">Blog Posts & Projects</h2>
        
        <div v-if="pending" class="loading">Loading...</div>
        
        <div v-else-if="error" class="error">
          Failed to load blog posts. Please try again later.
        </div>
        
        <div v-else class="blog-grid">
          <NuxtLink 
            v-for="post in posts" 
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="blog-card"
          >
            <div v-if="post.miniCover" class="blog-card-image">
              <img :src="`/blog/${post.miniCover}`" :alt="post.title" />
            </div>
            <div class="blog-card-content">
              <h3 class="blog-card-title">{{ post.title }}</h3>
              <p v-if="post.tags" class="blog-card-tags">{{ post.tags }}</p>
              <p class="blog-card-description">{{ post.description }}</p>
              <p class="blog-card-date">{{ post.formattedDate }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: posts, pending, error } = await useFetch('/api/blog')
</script>

<style scoped>
.home {
  background-color: white;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.content {
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}

.logo {
  width: 200px;
  height: auto;
  margin-bottom: 2rem;
  filter: brightness(0) invert(1);
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: white;
  margin-bottom: 2rem;
}

.title-brand {
  font-weight: 700;
}

.description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
}

.link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  transition: border-color 0.2s;
}

.link:hover {
  border-bottom-color: white;
}

.blog-section {
  padding: 4rem 2rem;
  background-color: #f7fafc;
}

.section-title {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  text-align: center;
  margin-bottom: 3rem;
}

.loading,
.error {
  text-align: center;
  padding: 2rem;
  font-size: 1.125rem;
  color: #718096;
}

.error {
  color: #e53e3e;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.blog-card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #e2e8f0;
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.blog-card-tags {
  font-size: 0.75rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

.blog-card-description {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.blog-card-date {
  font-size: 0.85rem;
  color: #a0aec0;
  margin-top: auto;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>

