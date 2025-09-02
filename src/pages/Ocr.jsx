
import React, { memo, Suspense } from 'react';
import { useAdvancedPageData, withErrorBoundary, withSuspense, useSelector } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const LazyOCRDemo = memo(() => {
  const { targetRef, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={targetRef} className="ocr-demo-section">
      {hasIntersected && (
        <Suspense fallback={<div className="loading-demo">Loading OCR demo...</div>}>
          <div className="ocr-demo-content">
            {/* OCR specific content would go here */}
            <p>OCR Demo Content</p>
          </div>
        </Suspense>
      )}
    </div>
  );
});

const OcrContent = memo(() => {
  const { data, loading, error } = useAdvancedPageData('ocr');
  const { measurePerformance } = usePerformanceOptimization();
  const animationsEnabled = useSelector(state => state.ui.animations.enabled);

  if (loading) return <div className="content-loading">Loading OCR data...</div>;
  if (error) return <div className="content-error">Error loading OCR content: {error}</div>;

  return measurePerformance('OCR page render', () => (
    <UniversalPage 
      pageKey="ocr"
      showHero={true}
      showFeatures={true}
      showCTA={true}
      className={animationsEnabled ? 'animations-enabled' : ''}
    >
      <Suspense fallback={<div className="loading-ocr-demo">Loading OCR demo...</div>}>
        <LazyOCRDemo />
      </Suspense>
    </UniversalPage>
  ));
});

LazyOCRDemo.displayName = 'LazyOCRDemo';
OcrContent.displayName = 'OcrContent';

const Ocr = withErrorBoundary(
  withSuspense(OcrContent, <div>Loading OCR page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <div className="container text-center py-5">
        <h2>Failed to load OCR page</h2>
        <p>{error?.message}</p>
        <button className="btn btn-primary" onClick={resetError}>Try Again</button>
      </div>
    </div>
  )
);

export default Ocr;
