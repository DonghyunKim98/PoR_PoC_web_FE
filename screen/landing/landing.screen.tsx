import {
  LandingFifthSectionModule,
  LandingFirstSectionModule,
  LandingFooterModule,
  LandingFourthSectionModule,
  LandingHeaderModule,
  LandingSecondSectionModule,
  LandingSeventhSectionModule,
  LandingSixthSectionModule,
  LandingThirdSectionModule,
} from './modules';

export const LandingScreen = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <LandingHeaderModule />
      <LandingFirstSectionModule />
      <LandingSecondSectionModule />
      <LandingThirdSectionModule />
      <LandingFourthSectionModule />
      <LandingFifthSectionModule />
      <LandingSixthSectionModule />
      <LandingSeventhSectionModule />
      <LandingFooterModule />
    </main>
  );
};
