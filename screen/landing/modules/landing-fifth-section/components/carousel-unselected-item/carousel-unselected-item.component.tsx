import Image from 'next/image';
import { memo } from 'react';

import { FifthSectionItem } from '../../landing-fifth-section.const';

type CarouselUnSelectedItemProps = FifthSectionItem & {};

export const CarouselUnSelectedItem = memo(
  ({ imgSrc, id, title, subTitle, contents }: CarouselUnSelectedItemProps) => {
    return (
      <div className="flex items-center justify-center">
        <div
          className={`flex flex-col items-center gap-4 py-8 px-3 bg-landing-gray-100 h-[450px] w-[250px] rounded`}
          key={id}
        >
          <div className="relative w-[180px] h-[140px]">
            <Image src={imgSrc} alt="img1" fill sizes="180px" />
          </div>
          <div className={`flex flex-col gap-2 prose text-landing-gray-1000 prose-title3 `}>
            <span>{title}</span>
            <span className={`prose prose-banner2 text-landing-gray-700`}>{subTitle}</span>
          </div>
          <div className="flex flex-col self-start gap-1 prose text-landing-gray-700 prose-body1 text-start">
            {contents.map((content) => (
              <div key={content}>{content}</div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

CarouselUnSelectedItem.displayName = 'CarouselUnSelectedItem';
