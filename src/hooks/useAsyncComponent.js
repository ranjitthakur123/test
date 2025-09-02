
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setError, clearError } from '../store/store';

export const useAsyncComponent = (asyncFn, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setLocalError] = useState(null);
  const dispatch = useDispatch();

  const executeAsync = useCallback(async () => {
    setLoading(true);
    setLocalError(null);
    dispatch(clearError());

    try {
      const result = await asyncFn();
      setData(result);
    } catch (err) {
      setLocalError(err.message);
      dispatch(setError(err.message));
    } finally {
      setLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    executeAsync();
  }, [executeAsync]);

  const retry = useCallback(() => {
    executeAsync();
  }, [executeAsync]);

  return { data, loading, error, retry };
};
