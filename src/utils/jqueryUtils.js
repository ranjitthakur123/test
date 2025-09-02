
// Utility functions for jQuery operations
export const safeJQuery = (callback) => {
  if (typeof window !== 'undefined' && window.$ && typeof window.$ === 'function') {
    try {
      callback(window.$);
    } catch (error) {
      console.warn('jQuery operation failed:', error);
    }
  }
};

export const initializeSlickSlider = (selector, options = {}) => {
  safeJQuery(($) => {
    const element = $(selector);
    if (element.length) {
      // Destroy existing slider if it exists
      if (element.hasClass('slick-initialized')) {
        element.slick('unslick');
      }
      
      // Initialize new slider
      element.slick(options);
    }
  });
};

export const destroySlickSlider = (selector) => {
  safeJQuery(($) => {
    const element = $(selector);
    if (element.length && element.hasClass('slick-initialized')) {
      element.slick('unslick');
    }
  });
};
