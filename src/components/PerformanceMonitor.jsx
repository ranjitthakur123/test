
import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePerformanceMetrics } from '@/store/store';

const PerformanceMonitor = memo(() => {
  const dispatch = useDispatch();
  const performanceEnabled = useSelector(state => state.ui.performance.enabled);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    if (!performanceEnabled || process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const newMetrics = {};
      
      entries.forEach(entry => {
        newMetrics[entry.name] = {
          duration: entry.duration,
          startTime: entry.startTime,
          type: entry.entryType
        };
      });

      setMetrics(prev => ({ ...prev, ...newMetrics }));
      dispatch(updatePerformanceMetrics(newMetrics));
    });

    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });

    return () => observer.disconnect();
  }, [performanceEnabled, dispatch]);

  if (!performanceEnabled || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="performance-monitor" style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '200px'
    }}>
      <div className="performance-title">Performance</div>
      {Object.entries(metrics).slice(-3).map(([key, value]) => (
        <div key={key} className="performance-metric">
          {key}: {value.duration?.toFixed(2)}ms
        </div>
      ))}
    </div>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;
