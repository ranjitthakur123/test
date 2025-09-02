
import { useEffect } from 'react';

const SEOHead = ({ 
  title = '', 
  description = '', 
  keywords = '', 
  ogTitle = '', 
  ogDescription = '', 
  ogImage = '' 
}) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }
    
    // Update meta description
    const updateMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    if (description) updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    if (ogTitle) updateProperty('og:title', ogTitle);
    if (ogDescription) updateProperty('og:description', ogDescription);
    if (ogImage) updateProperty('og:image', ogImage);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage]);

  return null;
};

export default SEOHead;
