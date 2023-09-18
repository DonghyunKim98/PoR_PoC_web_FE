import Image, { StaticImageData } from 'next/image';
import { memo } from 'react';

type LandingSeventhSectionMobileCompanyLogoProps = {
  imgSrc: StaticImageData;
  width: number;
  height: number;
};

export const LandingSeventhSectionMobileCompanyLogo =
  memo<LandingSeventhSectionMobileCompanyLogoProps>(({ imgSrc, width, height }) => {
    return (
      <div className="min-h-[50px] flex justify-center items-center">
        <Image src={imgSrc} alt="HYUNDAI Logo" width={width} height={height} />
      </div>
    );
  });

LandingSeventhSectionMobileCompanyLogo.displayName = 'LandingSeventhSectionMobileCompanyLogo';
