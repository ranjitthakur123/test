
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLoadedScript, addLoadingScript, addFailedScript } from '../store/store';

export const useScriptLoader = () => {
  const dispatch = useDispatch();
  const scripts = useSelector(state => state.ui.scripts);

  const loadScript = useCallback((src, options = {}) => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (scripts.loaded.includes(src)) {
        resolve();
        return;
      }

      // Check if currently loading
      if (scripts.loading.includes(src)) {
        // Wait for existing load
        const checkLoaded = () => {
          if (scripts.loaded.includes(src)) {
            resolve();
          } else if (scripts.failed.includes(src)) {
            reject(new Error(`Failed to load script: ${src}`));
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
        return;
      }

      dispatch(addLoadingScript(src));

      const script = document.createElement('script');
      script.src = src;
      script.async = options.async !== false;
      script.defer = options.defer || false;

      script.onload = () => {
        dispatch(addLoadedScript(src));
        resolve();
      };

      script.onerror = () => {
        dispatch(addFailedScript(src));
        reject(new Error(`Failed to load script: ${src}`));
      };

      document.head.appendChild(script);
    });
  }, [dispatch, scripts]);

  const loadMultipleScripts = useCallback(async (scripts) => {
    try {
      await Promise.all(scripts.map(script => 
        typeof script === 'string' ? loadScript(script) : loadScript(script.src, script.options)
      ));
      return true;
    } catch (error) {
      console.error('Failed to load some scripts:', error);
      return false;
    }
  }, [loadScript]);

  return {
    loadScript,
    loadMultipleScripts,
    scriptsStatus: scripts
  };
};
