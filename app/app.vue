<template>
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
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Lora:wght@400;500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
.container {
  min-height: 100vh;
  background-color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20vh;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.content {
  max-width: 800px;
  text-align: center;
}

.logo {
  width: 200px;
  height: auto;
  margin-bottom: 2rem;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.title-brand {
  color: #7c3aed;
  font-weight: 600;
}

.description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4a5568;
  font-weight: 400;
}

.link {
  color: #7c3aed;
  text-decoration: none;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}
</style>
