
import React from 'react';
import { usePageInitialization } from '@/utils/sharedImports';

const PageTemplate = ({ children, className = "" }) => {
  usePageInitialization();
  
  return (
    <div className={`page-container ${className}`}>
      {children}
    </div>
  );
};

export default PageTemplate;
