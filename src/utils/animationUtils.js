
// Simple WOW.js initialization utility
export const initializeAnimations = () => {
  if (typeof window !== 'undefined' && typeof window.WOW === 'function') {
    const wow = new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true
    });
    wow.init();
  } else {
    console.warn('WOW.js is not loaded. Animations may not work.');
  }
};
