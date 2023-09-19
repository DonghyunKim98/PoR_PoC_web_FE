import { memo } from 'react';

import { SearchInput } from '@/components';

type LandingTitleModuleProps = {};

export const LandingTitleModule = memo<LandingTitleModuleProps>(() => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[60px] bg-gray-600 shadow-md ">
        <div className="basic_content_layout">
          <span className="font-semibold text-gray-500 text-700 text-[20px] leading-[20px]">
            지크립토 거래소 PoR
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[310px] bg-primary">
        <div className="basic_content_layout gap-[72px]">
          <span className="font-semibold leading-normal text-white text-[50px]">자산 정보</span>
          <SearchInput />
        </div>
      </div>
    </>
  );
});

LandingTitleModule.displayName = 'LandingTitleModule';
