import React from 'react';
import UniversalPage from '@/components/UniversalPage';

const DotaApp = () => {
  return (
    <UniversalPage 
      pageKey="dotaApp"
      showHero={true}
      showFeatures={true}
      showCTA={true}
    />
  );
};

export default DotaApp;