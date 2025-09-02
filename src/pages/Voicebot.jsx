
import React from 'react';
import { memo, Suspense } from 'react';
import { useAdvancedPageData, withErrorBoundary, withSuspense } from '@/utils/sharedImports';
import UniversalPage from '@/components/UniversalPage';
import { usePerformanceOptimization } from '@/hooks/usePerformanceOptimization';

const VoicebotContent = memo(() => {
  const { data, loading, error } = useAdvancedPageData('voicebot');
  const { measurePerformance } = usePerformanceOptimization();

  if (loading) return <div className="content-loading">Loading voicebot data...</div>;
  if (error) return <div className="content-error">Error loading content: {error}</div>;

  return measurePerformance('VoicebotContent render', () => (
    <UniversalPage 
      pageKey="voicebot"
      showHero={true}
      showFeatures={true}
      showCTA={true}
    />
  ));
});

VoicebotContent.displayName = 'VoicebotContent';

const Voicebot = withErrorBoundary(
  withSuspense(VoicebotContent, <div>Loading Voicebot page...</div>),
  ({ error, resetError }) => (
    <div className="error-fallback">
      <h2>Failed to load Voicebot page</h2>
      <button onClick={resetError}>Try Again</button>
    </div>
  )
);

export default Voicebot;
