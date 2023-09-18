import { memo } from 'react';

type LandingTitleModuleProps = {};

export const LandingTitleModule = memo<LandingTitleModuleProps>(() => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[60px] bg-gray-600 shadow-md ">
        <span className="font-semibold text-gray-500 text-700 text-20 leading-20">
          지크립토 거래소 PoR
        </span>
      </div>
    </>
  );
});

LandingTitleModule.displayName = 'LandingTitleModule';
