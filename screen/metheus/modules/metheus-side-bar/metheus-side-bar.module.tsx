import Image from 'next/image';
import { memo } from 'react';

import { IdeaOceanLogoImg } from './assets';
import { MetheusSideBarConstraintSlider } from './components';
import { METHEUS_CONSTRAINTS } from './metheus-side-bar.const';

type MetheusSideBarModuleProps = {};

export const MetheusSideBarModule = memo<MetheusSideBarModuleProps>(() => {
  return (
    <div className="px-5 py-4 bg-[#1D1B24] text-white inline-block">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row items-center gap-8">
          <div className="relative w-14 h-14">
            <Image src={IdeaOceanLogoImg} alt="logoImg" />
          </div>
          <div className="prose prose-h3 text-[#CAC4D0] font-bold">Metheus</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="prose prose-h3 text-[#D0BCFF] font-medium">Constraints</div>
          {METHEUS_CONSTRAINTS.map((item) => {
            return <MetheusSideBarConstraintSlider {...item} key={item.title} />;
          })}
        </div>
      </div>
    </div>
  );
});

MetheusSideBarModule.displayName = 'MetheusSideBarModule';
