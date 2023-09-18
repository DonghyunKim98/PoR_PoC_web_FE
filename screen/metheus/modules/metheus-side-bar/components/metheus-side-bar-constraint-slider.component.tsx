import { Slider } from '@mui/material';
import { memo } from 'react';

import { MetheusConstraint } from '../metheus-side-bar.const';

type MetheusSideBarConstraintSliderProps = MetheusConstraint & {};

export const MetheusSideBarConstraintSlider = memo<MetheusSideBarConstraintSliderProps>(
  ({ title, startValue, endValue, unit = '' }) => {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 ">
          <div className="font-semibold prose text-white prose-body1">{title}</div>
          <div className="prose text-white prose-body2">{`${startValue}-${endValue}${unit}`}</div>
        </div>
        <div className="w-[268px]">
          <Slider
            className="w-[268px]"
            sx={{
              color: '#D0BCFF',
              '& .MuiSlider-rail': {
                color: '#36343B',
                height: 6,
              },
            }}
          />
        </div>
      </div>
    );
  },
);

MetheusSideBarConstraintSlider.displayName = 'MetheusSideBarConstraintSlider';
