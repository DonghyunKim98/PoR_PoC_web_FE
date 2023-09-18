import { memo } from 'react';

type LandingSixthSectionOutlineButtonProps = {
  content: string;
  url: string;
};

export const LandingSixthSectionOutlineButton = memo<LandingSixthSectionOutlineButtonProps>(
  ({ content, url }) => {
    const handlePressButton = () => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
      <button
        onClick={handlePressButton}
        className="flex flex-col items-center justify-center text-white border rounded py-7 w-[242px]"
      >
        {content}
      </button>
    );
  },
);

LandingSixthSectionOutlineButton.displayName = `LandingSixthSectionOutlineButton`;
