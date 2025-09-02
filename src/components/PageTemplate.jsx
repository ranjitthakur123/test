
import React from 'react';
import { usePageInitialization } from '@/hooks/usePageInitialization';

const PageTemplate = ({ 
  children, 
  className = "",
  seoTitle,
  seoDescription,
  seoKeywords
}) => {
  usePageInitialization();
  
  return (
    <>
      {(seoTitle || seoDescription || seoKeywords) && (
        <head>
          {seoTitle && <title>{seoTitle}</title>}
          {seoDescription && (
            <meta name="description" content={seoDescription} />
          )}
          {seoKeywords && (
            <meta name="keywords" content={seoKeywords} />
          )}
        </head>
      )}
      <div className={`page-container ${className}`}>
        {children}
      </div>
    </>
  );
};

export default PageTemplate;
