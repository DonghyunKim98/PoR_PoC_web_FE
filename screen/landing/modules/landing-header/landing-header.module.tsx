import Image from 'next/image';
import { memo } from 'react';

import titleLogoImg from './assets/title_logo.png';
import { HEADER_MENU_COPIES } from './landing-header.const';

export const LandingHeaderModule = memo(() => {
  return (
    <div className="flex flex-row items-center justify-between  px-6 h-[60px]">
      <div className="w-[69px] md:w-[168px] h-[13.175px] md:h-[32px] relative">
        <Image src={titleLogoImg} alt="title logo" fill sizes="(min-width: 768px) 168px, 69px" />
      </div>
      <div className="flex flex-row items-center justify-end flex-1 gap-4 prose prose-banner2 md:prose-banner1 text-landing-gray-800">
        {HEADER_MENU_COPIES.map((copy) => (
          <button
            key={copy}
            onClick={() => {
              document.getElementById(copy)?.focus();
            }}
          >
            {copy}
          </button>
        ))}
      </div>
    </div>
  );
});

LandingHeaderModule.displayName = 'LandingHeaderModule';
