import Image from 'next/image';
import { memo } from 'react';

import { LandingCTAButtonComponent } from '@/components';
import { useBreakpoint } from '@/hooks';

import Section3Img from './assets/section_3.png';
import { THIRD_SECTION_EXPLANATIONS } from './landing-third-section.const';

export const LandingThirdSectionModule = memo(() => {
  const { isDesktop } = useBreakpoint();

  const onClickCTAButton = () => {
    document.getElementById('Contact Us')?.focus();
  };

  if (isDesktop) {
    return (
      <div
        id="Service"
        tabIndex={0}
        className="flex flex-row gap-[85px] justify-between items-center bg-landing-gray-1000 h-[620px] px-[165px]"
      >
        <div className="flex flex-col gap-7 min-w-[380px]">
          <div className="gap-2">
            <div className="font-bold prose prose-title3 text-landing-secondary">Service</div>
            <div className="prose text-white prose-h2">
              {'Mechanism Design\nAutomation'}
              <div className="landing_screen_gradient">{`(MDA S/W & Solution)`}</div>
            </div>
          </div>
          <div className="prose text-white prose-title2">
            Optimal mechanism design for best performance.
          </div>
          <div className="flex flex-row justify-between gap-4">
            {THIRD_SECTION_EXPLANATIONS.map((copy) => {
              const { title, content } = copy;
              return (
                <div key={title} className="flex flex-col gap-2 text-left">
                  <div className="font-black prose text-white prose-title2">{title}</div>
                  <div className="prose prose-body1 text-landing-gray-700">{content}</div>
                </div>
              );
            })}
          </div>
          <LandingCTAButtonComponent onClick={onClickCTAButton}>
            Make your own design Right Now
          </LandingCTAButtonComponent>
        </div>
        <div className="flex-grow">
          <Image
            src={Section3Img}
            alt="section 3 img"
            priority
            className="rounded"
            style={{ minWidth: 300 }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-6 px-6 py-10 text-center bg-landing-gray-1000 ">
      <Image src={Section3Img} alt="section 3 img" priority className="rounded" />
      <div className="flex flex-col gap-4 md:w-[460px] self-center">
        <div className="gap-2">
          <div className="font-bold prose prose-title3 md:prose-title1 text-landing-secondary">
            Service
          </div>
          <div className="prose text-white prose-h2">
            Mechanism Design Automation
            <div className="font-bold prose prose-h4 landing_screen_gradient">{`(MDA S/W & Solution)`}</div>
          </div>
        </div>
        <div className="prose text-white prose-title2">
          Optimal mechanism design for best performance.
        </div>
        <div className="flex flex-row justify-between gap-4">
          {THIRD_SECTION_EXPLANATIONS.map((copy) => {
            const { title, content } = copy;
            return (
              <div key={title} className="flex flex-col gap-2 text-center">
                <div className="prose text-white prose-title2 bold">{title}</div>
                <div className="prose prose-body2 leading-[18px] text-landing-gray-700">
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <LandingCTAButtonComponent onClick={onClickCTAButton}>
        Make your own design Right Now
      </LandingCTAButtonComponent>
    </div>
  );
});

LandingThirdSectionModule.displayName = 'LandingThirdSectionModule';
