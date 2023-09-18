import { memo } from 'react';
import YouTube from 'react-youtube';

import { LandingListItemComponent } from '@/components';
import { useBreakpoint } from '@/hooks';

import { SECOND_SECTION_COPIES, YOUTUBE_VIDEO_ID } from './landing-second-section.const';

export const LandingSecondSectionModule = memo(() => {
  const { isDesktop } = useBreakpoint();

  if (isDesktop) {
    return (
      <div
        id="Ambition"
        tabIndex={0}
        className="flex flex-row h-[620px] justify-between items-center gap-[60px] px-[165px]"
      >
        <div className="flex-1 max-w-[800px]">
          <YouTube
            iframeClassName="w-full aspect-video"
            videoId={YOUTUBE_VIDEO_ID}
            opts={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="prose prose-title1 text-landing-secondary">Ambition</div>
          <div className="flex flex-col gap-4">
            <div className="font-bold prose prose-h1 text-landing-gray-1000">
              We develop technologies that innovate the conventional design paradigms
            </div>
            <div className="flex flex-col gap-2 md:flex-1">
              {SECOND_SECTION_COPIES.map((copy) => {
                return <LandingListItemComponent copy={copy} key={copy} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-6 px-6 py-10 md:gap-8 ">
      <YouTube
        iframeClassName="w-full aspect-video px-2"
        videoId={YOUTUBE_VIDEO_ID}
        opts={{ width: '100%', height: '100%' }}
      />
      <div className="flex flex-col gap-2 text-left">
        <div className="prose prose-title3 md:prose-title1 text-landing-secondary">Ambition</div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="prose prose-h4 md:flex-1">
            We develop technologies that innovate the conventional design paradigms
          </div>
          <div className="flex flex-col gap-2 md:flex-1">
            {SECOND_SECTION_COPIES.map((copy) => {
              return <LandingListItemComponent copy={copy} key={copy} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

LandingSecondSectionModule.displayName = 'LandingSecondSectionModule';
