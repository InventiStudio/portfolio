<template>
  <div class="landing">
    <header class="navbar">
      <div class="navbar-content">
        <a href="/" class="navbar-logo">
          <img src="/inventi-name.svg" alt="InventiStudio" />
        </a>
        <nav class="navbar-nav">
          <a href="/" class="navbar-link">Home</a>
          <a href="/" class="navbar-link">Services</a>
          <a href="/" class="navbar-link">Projects</a>
          <a href="/" class="navbar-link">Blog</a>
          <a href="mailto:hello@inventi.studio" class="navbar-cta">
            Contact us
          </a>
        </nav>
      </div>
    </header>

    <div class="hero">
      <div class="hero-content">
        <img 
          src="/inventi-logo-white.svg" 
          alt="Vue.js & Node.js developers" 
          class="hero-logo"
        />
        
        <h1 class="hero-title">
          We are Vue.js & Node.js web development agency based in Wrocław
        </h1>
        
        <p class="hero-description">
          We excel at building modern web applications, providing full-stack JavaScript and UI/UX design services for enterprises, companies and startups.
        </p>
        
        <div class="hero-actions">
          <a href="mailto:hello@inventi.studio" class="btn btn-primary">
            Contact us
          </a>
        </div>
      </div>
    </div>

    <section class="services" id="services">
      <div class="services-header">
        <h2 class="services-title">Services</h2>
        <p class="services-description">What can we do for you?</p>
      </div>
      
      <div class="services-grid">
        <article class="service-card service-card--green">
          <div class="service-card-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3 class="service-card-title">Vue.js front‑end</h3>
          <p class="service-card-description">
            We are experts at creating beautiful and responsive front‑end applications using Vue.js.
          </p>
          <a href="/" class="service-card-btn service-card-btn--green">
            Read more
          </a>
          <a href="mailto:hello@inventi.studio" class="service-card-link service-card-link--green">
            or contact us!
          </a>
        </article>

        <article class="service-card service-card--blue">
          <div class="service-card-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
          </div>
          <h3 class="service-card-title">Node.js back‑end</h3>
          <p class="service-card-description">
            Need a powerful API? We make blazing fast Koa.js applications backed by PostgreSQL databases.
          </p>
          <a href="/" class="service-card-btn service-card-btn--blue">
            Read more
          </a>
          <a href="mailto:hello@inventi.studio" class="service-card-link service-card-link--blue">
            or contact us!
          </a>
        </article>

        <article class="service-card service-card--orange">
          <div class="service-card-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
          <h3 class="service-card-title">UI/UX design</h3>
          <p class="service-card-description">
            We create beautiful user interfaces and delightful user experiences for web applications.
          </p>
          <a href="/" class="service-card-btn service-card-btn--orange">
            Read more
          </a>
          <a href="mailto:hello@inventi.studio" class="service-card-link service-card-link--orange">
            or contact us!
          </a>
        </article>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column footer-main">
          <a href="/" class="footer-logo">
            <img src="/inventi-name.svg" alt="InventiStudio" />
          </a>
          <div class="footer-social">
            <a href="https://www.facebook.com/inventistudio" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/inventistudio" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/inventistudio" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://github.com/InventiStudio" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Home</h3>
          <a href="/" class="footer-link">Services</a>
          <a href="/" class="footer-link">Testimonials</a>
          <a href="/" class="footer-link">Recent blog posts</a>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Services</h3>
          <a href="/" class="footer-link">Vue.js front-end</a>
          <a href="/" class="footer-link">Node.js back-end</a>
          <a href="/" class="footer-link">UI/UX design</a>
        </div>

        <div class="footer-column">
          <h3 class="footer-heading">Contact</h3>
          <a href="mailto:hello@inventi.studio" class="footer-link footer-email">hello@inventi.studio</a>
          <span class="footer-text">Wrocław, Poland</span>
        </div>
      </div>
    </footer>
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
.landing {
  min-height: 100vh;
  background: white;
  position: relative;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #363537;
  transition: all 0.3s ease;
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo img {
  height: 24px;
  width: auto;
}

.navbar-nav {
  display: none;
  gap: 1.5rem;
  align-items: center;
}

@media (min-width: 768px) {
  .navbar-nav {
    display: flex;
  }
}

.navbar-link {
  font-family: 'Roboto', sans-serif;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.2s;
}

.navbar-link:hover {
  text-decoration: underline;
}

.navbar-cta {
  font-family: 'Roboto', sans-serif;
  padding: 0.625rem 1.25rem;
  background: transparent;
  border: 2px solid white;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.2s;
}

.navbar-cta:hover {
  background: white;
  color: #684bc6;
}

.hero {
  padding: 150px 2rem 100px;
  text-align: center;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/confetti-white.svg');
  background-size: 200px;
  background-position: center top;
  opacity: 0.06;
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-logo {
  width: 180px;
  height: auto;
  margin-bottom: 2.5rem;
}

.hero-title {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: white;
  margin: 0 0 1rem 0;
  line-height: 1.5;
}

.hero-description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.btn {
  font-family: 'Roboto', sans-serif;
  padding: 0.875rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
}

.btn-primary {
  background: #f8188e;
  color: white;
}

.btn-primary:hover {
  background: #d91579;
  transform: translateY(-1px);
}

.btn-link {
  color: white;
  font-size: 1rem;
  text-decoration: none;
}

.btn-link:hover {
  text-decoration: underline;
}

.services {
  background: white;
  padding: 5rem 2rem;
}

.services-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}

.services-title {
  font-family: 'Roboto', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: #363537;
  margin: 0 0 1rem 0;
}

.services-description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.125rem;
  color: rgba(54, 53, 55, 0.6);
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .hero {
    padding: 180px 2rem 120px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 2.5rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.service-card-icon {
  margin-bottom: 1.5rem;
  color: rgba(54, 53, 55, 0.25);
}

.service-card-title {
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #363537;
  margin: 0 0 1rem 0;
}

.service-card-description {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(54, 53, 55, 0.7);
  margin: 0 0 1.5rem 0;
}

.service-card-btn {
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: all 0.2s;
  margin-bottom: 0.75rem;
}

.service-card-btn--green {
  background: #2ec4b6;
}

.service-card-btn--green:hover {
  background: #26a99d;
}

.service-card-btn--blue {
  background: #1869e5;
}

.service-card-btn--blue:hover {
  background: #1557c7;
}

.service-card-btn--orange {
  background: #e46d75;
}

.service-card-btn--orange:hover {
  background: #d85962;
}

.service-card-link {
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9375rem;
  text-decoration: none;
  font-weight: 500;
}

.service-card-link--green {
  color: #2ec4b6;
}

.service-card-link--green:hover {
  text-decoration: underline;
}

.service-card-link--blue {
  color: #1869e5;
}

.service-card-link--blue:hover {
  text-decoration: underline;
}

.service-card-link--orange {
  color: #e46d75;
}

.service-card-link--orange:hover {
  text-decoration: underline;
}

.footer {
  background-color: #363537;
  padding: 3rem 2rem 4rem;
  color: rgba(255, 255, 255, 0.6);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footer-main {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.footer-logo img {
  height: 24px;
  width: auto;
}

.footer-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (min-width: 768px) {
  .footer-social {
    justify-content: flex-start;
  }
}

.social-link {
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.2s;
}

.social-link:hover {
  color: white;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-heading {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  margin: 0 0 0.5rem 0;
}

.footer-link {
  font-family: 'Roboto', sans-serif;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: white;
}

.footer-email {
  font-weight: 500;
  color: white;
}

.footer-text {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>
