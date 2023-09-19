import { LandingAssetsModule, LandingTitleModule } from './modules';

export const LandingScreen = () => {
  return (
    <main className="flex flex-col items-center w-full min-h-screen gap-12">
      <LandingTitleModule />
      <LandingAssetsModule />
    </main>
  );
};
