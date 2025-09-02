
import React, { useEffect } from 'react';
import { usePageInitialization } from '@/hooks/usePageInitialization';
import { scrollToTop } from '@/utils/scrollUtils';
import SEO from './SEO';

const PageTemplate = ({ 
  children, 
  seoData,
  className = '',
  containerFluid = false 
}) => {
  usePageInitialization();

  useEffect(() => {
    scrollToTop();
  }, []);

  const containerClass = containerFluid ? 'container-fluid' : 'container';

  return (
    <>
      <SEO {...seoData} />
      <div className={`page-wrapper ${className}`}>
        <div className={containerClass}>
          {children}
        </div>
      </div>
    </>
  );
};

export default PageTemplate;
