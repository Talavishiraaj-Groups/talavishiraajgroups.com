import { Audiences, CapabilityBento, Differentiators, HomeHero, HowWeWork, PrismTeaser, ProblemPicker, WhoWeAre, WorkRail } from '@/components/home';
import { CtaBand } from '@/components/ui';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HowWeWork />
      <ProblemPicker />
      <PrismTeaser />
      <WhoWeAre />
      <CapabilityBento />
      <Audiences />
      <WorkRail />
      <Differentiators />
      <CtaBand />
    </>
  );
}
