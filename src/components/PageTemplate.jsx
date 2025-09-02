
import React, { useEffect } from 'react';
import { usePageInitialization } from '@/hooks/usePageInitialization';
import { scrollToTop } from '@/utils/scrollUtils';
import { getSEOData } from '@/data/seoData';
import { getPageData } from '@/data/pageData';
import SEO from './SEO';

const PageTemplate = ({ 
  children, 
  pageKey = 'home',
  seoData,
  className = '',
  containerFluid = false,
  customSEO = null
}) => {
  usePageInitialization();

  useEffect(() => {
    scrollToTop();
  }, []);

  // Get SEO data - use custom if provided, otherwise get from data
  const finalSEOData = customSEO || seoData || getSEOData(pageKey);
  const pageContent = getPageData(pageKey);

  const containerClass = containerFluid ? 'container-fluid' : 'container';

  return (
    <>
      <SEO {...finalSEOData} />
      <div className={`page-wrapper ${className}`}>
        {containerFluid ? children : (
          <div className={containerClass}>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default PageTemplate;
