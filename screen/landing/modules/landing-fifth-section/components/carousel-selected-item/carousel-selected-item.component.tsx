import Image from 'next/image';
import { memo } from 'react';

import { FifthSectionItem } from '../../landing-fifth-section.const';

type CarouselSelectedItemProps = FifthSectionItem & {};

export const CarouselSelectedItem = memo(
  ({ imgSrc, id, title, subTitle, contents }: CarouselSelectedItemProps) => {
    return (
      <div className="flex items-center justify-center">
        <div
          className="flex flex-col items-center gap-4 py-8 px-3 bg-landing-secondary h-[450px] w-[250px] rounded"
          key={id}
        >
          <div className="relative w-[180px] h-[140px]">
            <Image src={imgSrc} alt="img1" fill sizes="180px" />
          </div>
          <div className={`flex flex-col gap-2 prose text-white prose-title3`}>
            <span>{title}</span>
            <span className={`prose prose-banner2 text-white`}>{subTitle}</span>
          </div>
          <div className="flex flex-col self-start gap-1 prose text-white prose-body1 text-start">
            {contents.map((content) => (
              <div key={content}>{content}</div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

CarouselSelectedItem.displayName = 'CarouselSelectedItem';
