import { memo } from 'react';

import { SingleAssetBlock } from '@/components';

type LandingAssetsModuleProps = {};

export const LandingAssetsModule = memo<LandingAssetsModuleProps>(() => {
  return (
    <div className="basic_content_layout gap-7">
      <SingleAssetBlock />
      <SingleAssetBlock />
    </div>
  );
});

LandingAssetsModule.displayName = 'LandingAssetsModule';
