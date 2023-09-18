import { StaticImageData } from 'next/image';

import {
  carouselImg1,
  carouselImg2,
  carouselImg3,
  carouselImg4,
  carouselImg5,
  carouselImg6,
  carouselImg7,
  carouselImg8,
} from './assets';

export type FifthSectionItem = {
  id: number;
  imgSrc: StaticImageData;
  title: string;
  subTitle: string;
  contents: string[];
};

export const FIFTH_SECTION_ITEMS: FifthSectionItem[] = [
  {
    id: 0,
    imgSrc: carouselImg1,
    title: 'Retractable\nRacing Handle',
    subTitle: 'Mechanism solution',
    contents: [
      'Date: 2023.08.30',
      'Feature: CAD Assembly',
      'Mechanism: 2D PRRP',
      'Note: SOLIDWORKS',
    ],
  },
  {
    id: 1,
    imgSrc: carouselImg2,
    title: 'Retractable\nRacing Handle',
    subTitle: 'Mechanism solution',
    contents: [
      'Date: 2023.08.31',
      'Feature: Prototype',
      'Mechanism: 2D PRRP',
      'Note: Control using a linear actuator and Arduino',
    ],
  },
  {
    id: 2,
    imgSrc: carouselImg3,
    title: 'Transformable Wheel\nMechanism',
    subTitle: 'Mechanism solution',
    contents: [
      'Date: 2022.11.17',
      'Feature: Prototype',
      'Mechanism: 2D 13R',
      'Note: manufactured using mechanical parts & 3D printing',
    ],
  },
  {
    id: 3,
    imgSrc: carouselImg4,
    title: 'Transformable Wheel\nMechanism',
    subTitle: 'Mechanism solution',
    contents: [
      'Date: 2022.11.17',
      'Feature: Prototype',
      'Mechanism: 2D PRRP',
      'Note: manufactured using mechanical parts & 3D printing',
    ],
  },
  {
    id: 4,
    imgSrc: carouselImg5,
    title: 'WHEEL ASSEMBLY HAVING\nSHAPE AND SYSTEM\nCOMPRISING THE SAME',
    subTitle: 'IDeA MDA',
    contents: [
      'Date: 2023.07.05',
      'Feature: Patent',
      'Mechanism: 2D PRRP',
      'Note: Kor.Patent, SNU',
    ],
  },
  {
    id: 5,
    imgSrc: carouselImg6,
    title: 'Finger Rehabilitation\nGuide Mechanism',
    subTitle: 'IDea MDA',
    contents: [
      'Date: 2019.01.09',
      'Feature: CAD Assembly',
      'Mechanism: 2D 8 bar linkage',
      'Note: SOLIDWORKS',
    ],
  },
  {
    id: 6,
    imgSrc: carouselImg7,
    title: 'Finger Rehabilitation\nGuide Mechanism',
    subTitle: 'Mechanism solution',
    contents: [
      'Date: 2023.01.09',
      'Feature: Mock-up',
      'Mechanism: 2D 8 bar linkage',
      'Note: Acrylic processing',
    ],
  },
  {
    id: 7,
    imgSrc: carouselImg8,
    title: 'Transformable\nWheel Mechanism',
    subTitle: 'Mechanism solution',
    contents: [
      'Date: 2022.11.09',
      'Feature: CAD Assembly',
      'Mechanism: 2D PRRP linkage',
      'Note: SOLIDWORKS',
    ],
  },
];
