// cf https://toor.co/blog/nuxtjs-smooth-scrolling-with-hash-links/

const findEl = (hash, x) => {
  return document.querySelector(hash) ||
    new Promise((resolve, reject) => {
      if (x > 50) {
        return resolve()
      }
      setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
    })
}

export async function scrollToHash (hash, smooth = true) {
  const el = await findEl(hash)
  if (!el) { return }
  if (smooth && 'scrollBehavior' in document.documentElement.style) {
    return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
  } else {
    return window.scrollTo(0, el.offsetTop)
  }
}

export default function (to, from, savedPosition) {
  if (savedPosition) { return savedPosition }
  const fromLocale = from.name.split('_').pop()
  const toLocale = to.name.split('_').pop()
  if (fromLocale === toLocale && to.hash) { return scrollToHash(to.hash) }
  return { x: 0, y: 0 }
}
