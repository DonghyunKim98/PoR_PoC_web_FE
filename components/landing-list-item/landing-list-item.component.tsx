import { memo } from 'react';

type LandingListItemComponentProps = { copy: string };

export const LandingListItemComponent = memo<LandingListItemComponentProps>(({ copy }) => {
  return (
    <div className="flex flex-row gap-3">
      <span className="w-1 h-1 rounded pt-[10px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
          <path
            d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z"
            fill="#888888"
          />
        </svg>
      </span>
      <span className="font-semibold prose prose-body1 text-landing-gray-700">{copy}</span>
    </div>
  );
});

LandingListItemComponent.displayName = 'LandingListItemComponent';
