import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { allDynamicRoutes } from '@/utils/routeConfig';
import { reinitializeSliders as reinitializePageSliders } from '../../utils/initScripts';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const routesNeedingReload = allDynamicRoutes;

    // Check if current pathname starts with any of the routes needing reload
    const needsReload = routesNeedingReload.some(route => pathname.startsWith(route));

    // Get the last visited path from sessionStorage
    const lastPath = sessionStorage.getItem('lastPath');

    if (needsReload && lastPath !== pathname) {
      // Store current path before reload
      sessionStorage.setItem('lastPath', pathname);
      // Reload the page
      window.location.reload();
    } else {
      // Scroll to top
      window.scrollTo(0, 0);

      // Reinitialize sliders
      reinitializePageSliders();

      // Update last path
      sessionStorage.setItem('lastPath', pathname);
    }
  }, [pathname]);

  return null;
};