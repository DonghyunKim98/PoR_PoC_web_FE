import Image from 'next/image';
import { memo } from 'react';

import { useBreakpoint } from '@/hooks';

import mainBannerImg from './assets/main_banner_1.png';

export const LandingFirstSectionModule = memo(() => {
  const { isDesktop, isTablet } = useBreakpoint();

  if (isDesktop) {
    return (
      <div className="relative min-h-[574px]">
        <div className="absolute z-10 w-full h-full px-[165px] bg-landing-gray-1000 bg-opacity-30">
          <div className="flex flex-col justify-center h-full gap-6">
            <h1 className="prose text-white prose-h1">
              {`Intelligent Design\nAutomation `}
              <span className="landing_screen_gradient">{`(IDeA)`}</span>
            </h1>
            <div className="prose text-white prose-title2">
              {`We pursue automation & digital transformation of the\n engineering design for various machinery and robots.`}
            </div>
          </div>
        </div>
        <Image
          src={mainBannerImg}
          alt="main banner"
          priority
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-[288px] md:min-h-[465px]">
      <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-5 px-6 text-center md:gap-10 bg-landing-gray-1000 bg-opacity-30">
        <h1 className="prose prose-h2 md:prose-h1">
          {isTablet ? (
            <div className="text-white">
              {`Intelligent Design\nAutomation `}
              <span className="landing_screen_gradient">{`(IDeA)`}</span>
            </div>
          ) : (
            <>
              <div className="text-white">{`Intelligent Design\nAutomation`}</div>
              <div className="landing_screen_gradient">{`(IDeA)`}</div>
            </>
          )}
        </h1>
        <div className="prose text-white prose-body2 md:prose-title2">
          {`We pursue automation & digital transformation of the\n engineering design for various machinery and robots.`}
        </div>
      </div>
      <Image
        src={mainBannerImg}
        alt="main banner"
        priority
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>
  );
});

LandingFirstSectionModule.displayName = 'LandingFirstSectionModule';
