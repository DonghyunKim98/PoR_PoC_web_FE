import { memo, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { CarouselSelectedItem, CarouselUnSelectedItem } from './components';
import { FIFTH_SECTION_ITEMS } from './landing-fifth-section.const';

export const LandingFifthSectionModule = memo(() => {
  const [selectedItemIdx, setSelectedItemIdx] = useState<number>(2);
  const handleChangeItem = (idx: number) => {
    setSelectedItemIdx(idx);
  };

  return (
    <div
      className="flex flex-col items-center gap-10 py-10 overflow-hidden"
      tabIndex={0}
      id="Reference"
    >
      <div className="prose text-center prose-title3 text-landing-secondary">Reference</div>
      <Carousel
        centerMode
        centerSlidePercentage={15}
        showArrows
        autoPlay={false}
        showStatus
        infiniteLoop
        interval={3000}
        selectedItem={selectedItemIdx}
        showThumbs={false}
        onChange={handleChangeItem}
        className="flex flex-row items-center"
        stopOnHover={false}
        showIndicators={false}
      >
        {FIFTH_SECTION_ITEMS.map((item, idx) => {
          const { id } = item;
          const isSelected = idx === selectedItemIdx;

          if (isSelected) {
            return <CarouselSelectedItem key={id} {...item} />;
          }

          return <CarouselUnSelectedItem key={id} {...item} />;
        })}
      </Carousel>
      <div>
        {FIFTH_SECTION_ITEMS.map((_, idx) => {
          const isSelected = idx === selectedItemIdx;
          const handlePressIndicator = () => {
            setSelectedItemIdx(idx);
          };

          return (
            <span
              onClick={handlePressIndicator}
              key={idx}
              role="button"
              className="inline-block mx-1"
            >
              <div className="relative z-20 top-[20px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="6" fill={isSelected ? '#838383' : '#D9D9D9'} />
                </svg>
              </div>
            </span>
          );
        })}
      </div>
    </div>
  );
});

LandingFifthSectionModule.displayName = 'LandingFifthSectionModule';
