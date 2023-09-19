import { memo } from 'react';

type LandingTitleModuleProps = {};

export const LandingTitleModule = memo<LandingTitleModuleProps>(() => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[60px] bg-gray-600 shadow-md ">
        <div className="basic_content_layout">
          <span className="font-semibold text-gray-500 text-700 text-20 leading-20">
            지크립토 거래소 PoR
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center h-[310px] bg-primary">
        <div className="basic_content_layout">안녕하세요</div>
      </div>
    </>
  );
});

LandingTitleModule.displayName = 'LandingTitleModule';
