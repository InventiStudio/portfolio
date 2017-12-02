import scrollTo from 'scroll-to'

export default function smoothScrollTo(target) {
  if (document.getElementById(target)) {
    scrollTo(0, document.getElementById(target).offsetTop, {
      ease: 'inOutQuad',
      duration: 800,
    })
  }
}
