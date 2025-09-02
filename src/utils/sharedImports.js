
// Consolidated shared imports and utilities
export { default as React, useEffect, useState, useRef, useCallback, useMemo } from 'react';
export { default as SEO } from '@/components/SEO';
export { usePageInitialization } from '@/hooks/usePageInitialization';
export { scrollToTop } from '@/utils/scrollUtils';
export { getImagePath } from '@/utils/imageUtils';
export { initializeAllScripts, initializeSliders, reinitializeSliders } from '@/utils/initScripts';
export { initializeAllAnimations, initializeWow } from '@/utils/initializeAnimations';
export { getSEOData } from '@/data/seoData';

// Common utility functions
export const createSection = (className, children) => {
  return React.createElement('section', { className }, children);
};

export const createContainer = (children, fluid = false) => {
  return React.createElement('div', { 
    className: fluid ? 'container-fluid' : 'container' 
  }, children);
};
