declare module 'scrollreveal' {
    interface ScrollRevealObject {
      reveal: (
        target: string | HTMLElement | NodeListOf<HTMLElement>,
        options?: ScrollRevealObjectOptions
      ) => ScrollRevealObject;
      sync: () => void;
      clean: (target: string | HTMLElement) => void;
      destroy: () => void;
    }
  
    interface ScrollRevealObjectOptions {
      origin?: 'top' | 'right' | 'bottom' | 'left';
      distance?: string;
      duration?: number;
      delay?: number;
      interval?: number;
      rotate?: { x?: number; y?: number; z?: number };
      opacity?: number;
      scale?: number;
      easing?: string;
      container?: HTMLElement;
      mobile?: boolean;
      reset?: boolean;
      useDelay?: 'always' | 'once' | 'onload';
      viewFactor?: number;
      viewOffset?: { top?: number; right?: number; bottom?: number; left?: number };
    }
  
    interface ScrollReveal {
      (): ScrollRevealObject;
    }
  
    const scrollReveal: ScrollReveal;
    export default scrollReveal;
  }