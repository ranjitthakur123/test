
import { useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAnimationsInitialized } from '../store/store';

export const usePerformanceOptimization = () => {
  const dispatch = useDispatch();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  // Debounce function for performance
  const debounce = useCallback((func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Throttle function for performance
  const throttle = useCallback((func, limit) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  // Intersection Observer for lazy loading
  const createIntersectionObserver = useCallback((callback, options = {}) => {
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    };

    return new IntersectionObserver(callback, defaultOptions);
  }, []);

  // Performance monitoring
  const measurePerformance = useCallback((name, fn) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  }, []);

  // Memory cleanup
  const cleanup = useCallback(() => {
    // Clear any timers, observers, or event listeners
    if (window.performanceObserver) {
      window.performanceObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return {
    debounce,
    throttle,
    createIntersectionObserver,
    measurePerformance,
    cleanup,
    animationsEnabled
  };
};
