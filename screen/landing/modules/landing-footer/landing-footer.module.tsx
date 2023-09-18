import { memo } from 'react';

type LandingFooterModuleProps = {};

export const LandingFooterModule = memo<LandingFooterModuleProps>(() => {
  return (
    <>
      <footer className="flex flex-col gap-2 px-6 py-10 bg-landing-gray-1000">
        <div className="flex flex-row items-center gap-2 prose text-landing-gray-700 prose-body2 md:prose-body1">
          <span>IDeA Ocean Inc.</span>
          <span className="w-[1px] h-2.5 bg-landing-gray-700 md:h-[15px]" />
          <span>CEO : Jungho Kim</span>
        </div>
        <div className="flex flex-row items-center gap-2 prose text-landing-gray-700 prose-body2 md:prose-body1">
          <span className="w-[1px] h-2.5 bg-landing-gray-700 md:h-[15px]" />
          <span>Business Number : 622-81-29219</span>
        </div>
        <span className="prose text-landing-gray-700 prose-body2 md:prose-body1">
          Address : 3F, 535, Bongcheon-ro, Gwanak-gu, Seoul, Republic of Korea
        </span>
        <span className="text-[#B9B9B9]  prose prose-body2 md:prose-body1">
          Inquiry/Customer Service : csteam@ideaocean.ai
        </span>
        <span className="text-[#4F4E4E]  prose prose-body2 md:prose-body1">
          Copyright © 2023 IDeA Ocean Inc. All Rights Reserved.
        </span>
      </footer>
    </>
  );
});

LandingFooterModule.displayName = 'LandingFooterModule';
