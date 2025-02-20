export const useScrollReveal = () => {
    const defaultOptions = {
      distance: '50px',
      origin: 'bottom',
      duration: 1000,
    }
  
    const getScrollRevealOptions = (customOptions = {}) => {
      return {
        ...defaultOptions,
        ...customOptions,
      }
    }
  
    return {
      getScrollRevealOptions
    }
  }