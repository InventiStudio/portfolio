<template lang="pug">
  header.navbar(:class="{ 'navbar--hidden': isNavbarHidden, 'navbar--filled': isNavbarFilled }")
    .row.align-middle.align-justify.expanded
      .shrink.columns
        router-link(:to="{ name: 'Home' }")
          img(src="~assets/inventi__name.svg", alt="TODO")
      .shrink.columns
        button.navbar__nav-button(
          :class="{ 'navbar__nav-button--active': isNavOpen }",
          @click="toggleNav()",
        )
          span Toggle nav
        nav.navbar__nav(:class="{ 'navbar__nav--active': isNavOpen }")
          ul.navbar__links.list-reset
            router-link.navbar__link(
              :to="{ name: 'Home' }",
              :exact="true",
              active-class="navbar__link--active",
            ) {{ $t('home.title') }}
            router-link.navbar__link(
              :to="{ name: 'Services' }",
              :exact="true",
              active-class="navbar__link--active",
            ) {{ $t('services.title') }}
            router-link.navbar__link(
              :to="{ name: 'Vue' }",
              :exact="true",
              active-class="navbar__link--active",
            ) Vue
            router-link.navbar__link(
              :to="{ name: 'Node' }",
              :exact="true",
              active-class="navbar__link--active",
            ) Node
            a.navbar__button(href="#") {{ $t('common.estimateProject') }}
</template>

<script>
  export default {
    data() {
      return {
        isNavOpen: false,
        isNavbarHidden: false,
        isNavbarFilled: false,
        scrollPosition: 0,
      }
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
        } else {
          this.isNavbarHidden = false
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
      '$route.path': function $routePath() {
        this.isNavOpen = false
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleNavbarOnScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleNavbarOnScroll)
    },
  }
</script>

<style src="./Navbar.sass" lang="sass" scoped></style>
