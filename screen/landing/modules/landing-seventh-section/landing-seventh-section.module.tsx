import Image from 'next/image';
import { memo } from 'react';

import { useBreakpoint } from '@/hooks';

import CAPA_LogoImg from './assets/CAPA_Logo.png';
import COMPA_LogoImg from './assets/COMPA_Logo.png';
import FUTURE_PLAY_LogoImg from './assets/Future_Play_Logo.png';
import HYUNDAI_LogoImg from './assets/Hyundai_Logo.png';
import STUP_LogoImg from './assets/STUP_Logo.png';
import SEOUL_UNIVERSITY_LogoImg from './assets/Seoul_University_Logo.png';
import { LandingSeventhSectionMobileCompanyLogo } from './components';
import { SEVENTH_SECTION_COMPANY_LOGOS } from './landing-seventh-section.const';

export const LandingSeventhSectionModule = memo(() => {
  const { isDesktop, isTablet } = useBreakpoint();

  if (isTablet) {
    return (
      <div className="flex flex-row flex-wrap items-center justify-between gap-6 px-8 py-9 bg-landing-gray-100 lg:gap-12 lg:justify-center">
        {SEVENTH_SECTION_COMPANY_LOGOS.map((item, idx) => {
          const { width, height, imgSrc } = item;

          if (isDesktop) {
            return (
              <Image src={imgSrc} alt="logo" width={width * 0.8} height={height * 0.8} key={idx} />
            );
          }

          return (
            <div key={idx} className="w-[27%] flex items-center justify-center">
              <Image src={imgSrc} alt="logo" width={width} height={height} />
            </div>
          );
        })}
      </div>
    );
  }

  // TODO : FIX IT AS GRID
  return (
    <div className="flex flex-row px-6  py-8 bg-landing-gray-100 gap-4 min-h-[300px]">
      <div className="flex flex-col items-center justify-between flex-1 gap-6">
        <LandingSeventhSectionMobileCompanyLogo imgSrc={HYUNDAI_LogoImg} width={137} height={17} />
        <LandingSeventhSectionMobileCompanyLogo
          imgSrc={SEOUL_UNIVERSITY_LogoImg}
          width={158}
          height={34}
        />
        <LandingSeventhSectionMobileCompanyLogo imgSrc={COMPA_LogoImg} width={56} height={47} />
      </div>
      <div className="flex flex-col items-center justify-between flex-1 gap-6">
        <LandingSeventhSectionMobileCompanyLogo
          imgSrc={FUTURE_PLAY_LogoImg}
          width={83}
          height={48}
        />
        <LandingSeventhSectionMobileCompanyLogo imgSrc={CAPA_LogoImg} width={107} height={26} />
        <LandingSeventhSectionMobileCompanyLogo imgSrc={STUP_LogoImg} width={155} height={34} />
      </div>
    </div>
  );
});

LandingSeventhSectionModule.displayName = `LandingSeventhSectionModule`;
