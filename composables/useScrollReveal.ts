import scrollReveal from "scrollreveal"

export const useScrollReveal = () => {
  const nuxtApp = useNuxtApp()

  const initScrollReveal = () => {
    if (import.meta.client) {
      const ScrollReveal = scrollReveal
      
      const sr = ScrollReveal({
        reset: false,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        scale: 1,
        viewFactor: 0.3,
      })

      const defaultOptions = {
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
      }

      // Header animations
      sr.reveal('.header__image img', {
        ...defaultOptions,
        origin: 'right',
      })
      sr.reveal('.header__content h1', {
        ...defaultOptions,
        delay: 500,
      })
      sr.reveal('.header__content .section__description', {
        ...defaultOptions,
        delay: 1000,
      })
      sr.reveal('.header__content .header__btn', {
        ...defaultOptions,
        delay: 1500,
      })

      // Explore section animations
      sr.reveal('.explore__image img', {
        ...defaultOptions,
        origin: 'left',
      })
      sr.reveal('.explore__content .section__header', {
        ...defaultOptions,
        delay: 500,
      })
      sr.reveal('.explore__content .section__description', {
        ...defaultOptions,
        delay: 1000,
      })
      sr.reveal('.explore__content .explore__btn', {
        ...defaultOptions,
        delay: 1500,
      })

      // Banner animations
      sr.reveal('.banner__card', {
        ...defaultOptions,
        interval: 500,
      })

      // Chef section animations
      sr.reveal('.chef__image img', {
        ...defaultOptions,
        origin: 'right',
      })
      sr.reveal('.chef__content .section__header', {
        ...defaultOptions,
        delay: 500,
      })
      sr.reveal('.chef__content .section__description', {
        ...defaultOptions,
        delay: 1000,
      })
      sr.reveal('.chef__list li', {
        ...defaultOptions,
        delay: 1500,
        interval: 500,
      })
    }
  }

  return {
    initScrollReveal
  }
}