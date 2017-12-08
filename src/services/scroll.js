import scrollTo from 'scroll-to'

const spacing = -90

export default function smoothScrollTo(target) {
  const el = document.getElementById(target)
  if (el) {
    scrollTo(0, el.offsetTop + el.offsetParent.offsetTop + spacing, {
      ease: 'inOutQuad',
      duration: 800,
    })
  }
}
