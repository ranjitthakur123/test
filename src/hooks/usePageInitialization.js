
import { useEffect } from 'react';
import { initializeAllAnimations } from '@/utils/initializeAnimations';
import { initializeAllScripts } from '@/utils/initScripts';

export const usePageInitialization = () => {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initializeAllAnimations();
      initializeAllScripts();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
};
