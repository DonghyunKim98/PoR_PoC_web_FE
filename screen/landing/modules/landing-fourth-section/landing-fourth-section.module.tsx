import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { memo } from 'react';

import { useBreakpoint } from '@/hooks';

import Section4SmImg from './assets/section_4_small.png';
import { FOURTH_SECTION_ITEMS } from './landing-fourth-section.const';



export const LandingFourthSectionModule = memo(() => {
  const { isDesktop, isTablet } = useBreakpoint();

  const handlePressCardButton = (idx: number) => {
    window.open(
      idx === 0
        ? 'http://idealab.snu.ac.kr/publications/pub_list.php?part=1'
        : 'https://drive.google.com/drive/folders/1f8LVLxTYfeuciN7jCvANHwtFcS1DN4hm?usp=sharing',
      '_blank',
      'noopener,noreferrer',
    );
  };

  if (isDesktop) {
    return (
      <div id="Core Tech." tabIndex={0} className="relative min-h-[648px]">
        <div className="flex flex-row items-center justify-between px-[165px] gap-10 absolute z-10 w-full h-full py-10 bg-landing-gray-1000 bg-opacity-90">
          <div className="flex flex-col flex-grow gap-2 text-left">
            <div className="prose prose-title1 text-landing-secondary">Core Tech.</div>
            <div className="text-white max-w-[540px] prose prose-h3">
              Experience the future of machine design with our innovative
              <span className="font-bold landing_screen_gradient">{' "Autonomous\n'}</span>
              <span className="font-bold landing_screen_gradient">
                {'Mechanism Design Methodology,"\n'}
              </span>
              opening a new horizon in machine design
            </div>
          </div>
          <div className="flex flex-row justify-center gap-6">
            {FOURTH_SECTION_ITEMS.map((item, idx) => {
              const { imgSrc, title, content, buttonText } = item;

              return (
                <div key={title} className="relative">
                  <div className="flex flex-col items-center  justify-between px-8 py-9 gap-4 w-[245px] h-[520px]">
                    <Image
                      src={imgSrc}
                      width={181}
                      height={240}
                      alt="LabImg"
                      style={{ marginTop: idx === 0 ? 0 : 34 }}
                    />
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="flex flex-col gap-2">
                        <div className="prose text-white prose-title3">{title}</div>
                        <div className="prose prose-body2 text-landing-gray-700">{content}</div>
                      </div>
                      <button
                        onClick={() => handlePressCardButton(idx)}
                        className="flex flex-row items-center gap-2 prose text-white prose-title2"
                      >
                        {buttonText}
                        <ArrowForwardIcon />
                      </button>
                    </div>
                  </div>
                  <div className="absolute -z-10 bg-landing-gray-1000 top-[132px] rounded w-[245px] h-[380px] border border-solid border-landing-primary" />
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src={Section4SmImg}
          alt="Section4 Img"
          priority
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="relative min-h-[834px]">
        <div className="absolute z-10 flex flex-col w-full h-full gap-6 py-10 bg-landing-gray-1000 bg-opacity-70 ">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="prose prose-title2 text-landing-secondary">Core Tech.</div>
            <div className="text-white fourth_section_content max-w-[540px]">
              Experience the future of machine design with our innovative
              <span className="landing_screen_gradient">{' "Autonomous\n'}</span>
              <span className="landing_screen_gradient">{'Mechanism Design Methodology,"\n'}</span>
              opening a new horizon in machine design
            </div>
          </div>
          <div className="flex flex-row justify-center gap-6">
            {FOURTH_SECTION_ITEMS.map((item, idx) => {
              const { imgSrc, title, content, buttonText } = item;

              return (
                <div key={title} className="relative">
                  <div className="flex flex-col items-center  justify-between px-8 py-9 gap-4 w-[245px] h-[520px]">
                    <Image
                      src={imgSrc}
                      width={181}
                      height={240}
                      alt="LabImg"
                      style={{ marginTop: idx === 0 ? 0 : 34 }}
                    />
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div className="flex flex-col gap-2">
                        <div className="prose text-white prose-title3">{title}</div>
                        <div className="prose prose-body2 text-landing-gray-700">{content}</div>
                      </div>
                      <button
                        onClick={() => handlePressCardButton(idx)}
                        className="flex flex-row items-center gap-2 prose text-white prose-title2"
                      >
                        {buttonText}
                        <ArrowForwardIcon />
                      </button>
                    </div>
                  </div>
                  <div className="absolute -z-10 bg-landing-gray-1000 top-[132px] rounded w-[245px] h-[380px] border border-solid border-landing-primary" />
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src={Section4SmImg}
          alt="Section4 Img"
          priority
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-[1300px] ">
      <div className="absolute z-10 flex flex-col w-full h-full gap-6 px-6 py-10 bg-opacity-50 bg-landing-gray-1000">
        <div className="flex flex-col gap-2 text-center">
          <div className="items-center prose prose-title2 text-landing-secondary">Core Tech.</div>
          <div className="text-white fourth_section_content">
            Experience the future of machine design with our innovative
            <span className="landing_screen_gradient">{'"Autonomous\n'}</span>
            <span className="landing_screen_gradient">{'Mechanism Design\n'}</span>
            <span className="landing_screen_gradient">{'Methodology,"'}</span>
            opening a new horizon in machine design!
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          {FOURTH_SECTION_ITEMS.map((item, idx) => {
            const { imgSrc, title, content, buttonText } = item;

            return (
              <div key={title} className="relative">
                <div className="flex flex-col items-center  px-8 gap-4 w-[245px] h-[474px]">
                  <Image src={imgSrc} width={181} height={240} alt="LabImg" />
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex flex-col gap-2">
                      <div className="prose text-white prose-title3">{title}</div>
                      <div className="prose prose-body2 text-landing-gray-700">{content}</div>
                    </div>
                    <button
                      onClick={() => handlePressCardButton(idx)}
                      className="flex flex-row items-center gap-2 prose text-white prose-title2"
                    >
                      {buttonText}
                      <ArrowForwardIcon />
                    </button>
                  </div>
                </div>
                {idx === 0 ? (
                  <div className="absolute -z-10 bg-landing-gray-1000 top-[96px] rounded w-[245px] h-[368px] border border-solid border-landing-primary" />
                ) : (
                  <div className="absolute -z-10 bg-landing-gray-1000 top-[96px] rounded w-[245px] h-[300px] border border-solid border-landing-primary" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={Section4SmImg}
        alt="Section4 Img"
        priority
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
});

LandingFourthSectionModule.displayName = 'LandingFourthSectionModule';
