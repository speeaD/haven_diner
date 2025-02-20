import ScrollReveal from 'scrollreveal'

export default defineNuxtPlugin((nuxtApp) => {
  const sr = ScrollReveal({
    reset: false,
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    scale: 1,
    viewFactor: 0.3,
  })

  nuxtApp.vueApp.directive('scroll-reveal', {
    mounted(el, binding) {
      const options = binding.value || {}
      sr.reveal(el, options)
    },
    unmounted(el) {
      sr.clean(el)
    }
  })

  return {
    provide: {
      scrollReveal: sr
    }
  }
})