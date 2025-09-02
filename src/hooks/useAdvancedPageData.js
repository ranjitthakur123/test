
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo } from 'react';
import { setPageData, setLoading, setError, clearError } from '../store/store';
import { getPageData as getStaticPageData } from '../data/pageData';

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useAdvancedPageData = (pageKey) => {
  const dispatch = useDispatch();
  const { data, loading, error, cache } = useSelector(state => state.pageData);
  
  const pageData = useMemo(() => {
    return data[pageKey] || getStaticPageData(pageKey);
  }, [data, pageKey]);

  const isStale = useCallback((pageKey) => {
    const cached = cache[pageKey];
    if (!cached) return true;
    return Date.now() - cached.timestamp > CACHE_DURATION;
  }, [cache]);

  const loadPageData = useCallback(async (pageKey, force = false) => {
    if (!force && !isStale(pageKey) && data[pageKey]) {
      return data[pageKey];
    }

    dispatch(setLoading(true));
    dispatch(clearError());

    try {
      // Simulate async loading for future API integration
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const staticData = getStaticPageData(pageKey);
      dispatch(setPageData({ pageKey, data: staticData }));
      
      return staticData;
    } catch (err) {
      dispatch(setError(err.message));
      // Fallback to static data
      const fallbackData = getStaticPageData(pageKey);
      dispatch(setPageData({ pageKey, data: fallbackData }));
      return fallbackData;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, data, isStale]);

  useEffect(() => {
    if (!pageData || isStale(pageKey)) {
      loadPageData(pageKey);
    }
  }, [pageKey, pageData, loadPageData, isStale]);

  const refetch = useCallback(() => {
    return loadPageData(pageKey, true);
  }, [loadPageData, pageKey]);

  return {
    data: pageData,
    loading,
    error,
    refetch,
    isStale: isStale(pageKey)
  };
};
