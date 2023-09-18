import { StaticImageData } from 'next/image';

import {
  HYUNDAI_LogoImg,
  FUTURE_PLAY_LogoImg,
  SEOUL_UNIVERSITY_LogoImg,
  CAPA_LogoImg,
  COMPA_LogoImg,
  STUP_LogoImg,
} from './assets';

export const SEVENTH_SECTION_COMPANY_LOGOS: {
  imgSrc: StaticImageData;
  width: number;
  height: number;
}[] = [
  {
    imgSrc: HYUNDAI_LogoImg,
    width: 158,
    height: 19,
  },
  {
    imgSrc: FUTURE_PLAY_LogoImg,
    width: 96,
    height: 57,
  },
  {
    imgSrc: SEOUL_UNIVERSITY_LogoImg,
    width: 181,
    height: 40,
  },
  {
    imgSrc: CAPA_LogoImg,
    width: 123,
    height: 31,
  },
  {
    imgSrc: COMPA_LogoImg,
    width: 65,
    height: 56,
  },
  {
    imgSrc: STUP_LogoImg,
    width: 178,
    height: 40,
  },
];
