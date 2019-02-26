<template lang="pug">
  header.navbar(
    :class="{ 'navbar--hidden': isNavbarHidden, 'navbar--hidden-blog': isNavbarHiddenBlog, 'navbar--filled': isNavbarFilled }",
    data-navbar="",
  )
    .navbar__top
      .row.align-middle.align-justify
        .shrink.columns
          p
            span {{ $t('navbar.blog') }}:
            =" "
            router-link(v-if="recentBlogPost", :to="$routeByName('BlogPost', { params: { slug: recentBlogPost.data.slug } })")
              strong {{ recentBlogPost.data.title }}
        .shrink.columns
          SocialLinks
    .navbar__bottom.row.align-middle.align-justify
      .shrink.columns
        router-link(:to="$routeByName('Home')", data-navbar="link--home-1")
          img(src="~assets/inventi__name.svg", :alt="$t('common.inventiStudio')")
      .shrink.columns
        button.navbar__nav-button(
          :class="{ 'navbar__nav-button--active': isNavOpen }",
          @click="toggleNav()",
        )
          span Toggle nav
        nav.navbar__nav(:class="{ 'navbar__nav--active a-fade-in': isNavOpen }")
          h1.hidden {{ $t('navbar.title') }}
          ul.navbar__links.list-reset
            router-link.navbar__link(
              :to="$routeByName('Home')",
              :exact="true",
              active-class="navbar__link--active",
              data-navbar="link--home-2",
            ) {{ $t('home.title') }}
            router-link.navbar__link(
              :to="$routeByName('Services')",
              :exact="true",
              active-class="navbar__link--active",
              data-navbar="link--services",
            ) {{ $t('services.title') }}
            router-link.navbar__link(
              :to="$routeByName('Projects')",
              :exact="true",
              active-class="navbar__link--active",
              data-navbar="link--services",
            ) {{ $t('projects.title') }}
            router-link.navbar__link(
              :to="$routeByName('Blog')",
              :exact="true",
              active-class="navbar__link--active",
              data-navbar="link--services",
            ) {{ $t('blog.title') }}
            router-link.navbar__cta.o-btn.transition(
              :to="$routeByName('Estimate')",
              :exact="true",
              active-class="navbar__cta--active",
              data-navbar="link--estimate",
            )
              span.fs-16.transition {{ $t('common.estimateProject') }}
</template>

<script>
  import throttle from 'lodash/throttle'
  import SocialLinks from 'components/SocialLinks/SocialLinks'

  export default {
    components: {
      SocialLinks,
    },

    data() {
      return {
        isNavOpen: false,
        isNavbarHidden: false,
        isNavbarHiddenBlog: false,
        isNavbarFilled: false,
        scrollPosition: 0,
        throttleNavbarOnScroll: null,
      }
    },

    computed: {
      recentBlogPost() {
        return this.$root.blogposts[0]
      },
    },

    methods: {
      getScrollPosition() {
        return window.scrollY || document.documentElement.scrollTop
      },
      toggleNav() {
        this.isNavOpen = !this.isNavOpen
      },
      toggleNavbarVisibility(scrollPosition) {
        if (scrollPosition > this.scrollPosition && scrollPosition > 70 && !this.isNavOpen) {
          this.isNavbarHidden = true
          this.scrollPosition = scrollPosition
        } else if (scrollPosition > 70 && !this.isNavOpen) {
          this.isNavbarHidden = false
          this.isNavbarHiddenBlog = true
          this.scrollPosition = scrollPosition
        } else {
          this.isNavbarHidden = false
          this.isNavbarHiddenBlog = false
          this.scrollPosition = scrollPosition
        }
      },
      toggleNavbarTransparency(scrollPosition) {
        if (scrollPosition > 80) this.isNavbarFilled = true
        else this.isNavbarFilled = false
      },
      handleNavbarOnScroll() {
        const scrollPosition = this.getScrollPosition()
        this.toggleNavbarVisibility(scrollPosition)
        this.toggleNavbarTransparency(scrollPosition)
      },
    },

    watch: {
      '$route.path'() {
        this.isNavOpen = false
      },
    },

    mounted() {
      this.throttleNavbarOnScroll = throttle(this.handleNavbarOnScroll, 20)
      window.addEventListener('scroll', this.throttleNavbarOnScroll)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.throttleNavbarOnScroll)
      this.throttleNavbarOnScroll = null
    },
  }
</script>

<style src="./Navbar.sass" lang="sass" scoped></style>
