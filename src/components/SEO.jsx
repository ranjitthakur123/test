
import React, { memo, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSEOData } from '../store/store';
import { getSEOData } from '@/data/seoData';

const SEO = memo(({ pageKey, customSEO = null }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const currentSEO = useSelector(state => state.seo.currentPage);

  const seoData = useMemo(() => {
    const staticSEO = getSEOData(pageKey);
    const finalSEO = customSEO ? { ...staticSEO, ...customSEO } : staticSEO;
    
    // Update Redux store
    dispatch(setSEOData(finalSEO));
    
    return finalSEO;
  }, [pageKey, customSEO, dispatch]);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoData.title,
    "description": seoData.description,
    "url": `https://website.devnagri.dev${location.pathname}`,
    "publisher": {
      "@type": "Organization",
      "name": "Devnagri",
      "url": "https://website.devnagri.dev"
    }
  }), [seoData, location.pathname]);

  React.useEffect(() => {
    // Update document title
    document.title = seoData.title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: seoData.description },
      { name: 'keywords', content: seoData.keywords?.join(', ') || '' },
      { property: 'og:title', content: seoData.openGraph?.title || seoData.title },
      { property: 'og:description', content: seoData.openGraph?.description || seoData.description },
      { property: 'og:url', content: `https://website.devnagri.dev${location.pathname}` },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description }
    ];

    metaTags.forEach(({ name, property, content }) => {
      if (!content) return;
      
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.name = name;
        if (property) meta.property = property;
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://website.devnagri.dev${location.pathname}`;

    // Update structured data
    let structuredScript = document.querySelector('#structured-data');
    if (!structuredScript) {
      structuredScript = document.createElement('script');
      structuredScript.id = 'structured-data';
      structuredScript.type = 'application/ld+json';
      document.head.appendChild(structuredScript);
    }
    structuredScript.textContent = JSON.stringify(structuredData);

  }, [seoData, location.pathname, structuredData]);

  return null;
});

SEO.displayName = 'SEO';

export default SEO;
