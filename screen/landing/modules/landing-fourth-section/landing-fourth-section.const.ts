import { StaticImageData } from 'next/image';

import Section4LabImg from './assets/section_4_lab.png';
import Section4PatentImg from './assets/section_4_patent.png';

export const FOURTH_SECTION_ITEMS: {
  imgSrc: StaticImageData;
  title: string;
  content: string;
  buttonText: string;
}[] = [
  {
    imgSrc: Section4LabImg,
    title: 'Explore core research from the Seoul National University’s IDeA Lab.',
    content:
      'Built on decades of proven research, our core technology is at the forefront of innovation.',
    buttonText: 'Explore',
  },
  {
    imgSrc: Section4PatentImg,
    title: 'Discover unprecedented mechanisms that redefine possibilities.',
    content:
      'Experience our groundbreaking innovation – patented mechanisms that are truly one-of-a-kind.',
    buttonText: 'Download Patent',
  },
];
