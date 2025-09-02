
import { useEffect } from 'react';
import { initializeSliders } from '@/utils/initializeAnimations';
import { initializeSliders1 } from '@/utils/initScripts';

export const usePageInitialization = () => {
  useEffect(() => {
    initializeSliders();
    initializeSliders1();
  }, []);
};
