import { ButtonHTMLAttributes, memo } from 'react';

type LandingCTAButtonComponentProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const LandingCTAButtonComponent = memo<LandingCTAButtonComponentProps>((props) => {
  return (
    <div className="inline-block">
      <button className="cta_button" {...props} />
    </div>
  );
});

LandingCTAButtonComponent.displayName = 'LandingCTAButtonComponent';
