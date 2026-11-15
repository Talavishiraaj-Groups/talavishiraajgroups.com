import { Audiences, CapabilityBento, Differentiators, HomeHero, HowWeWork, PrismTeaser, ProblemPicker, WhoWeAre, WorkRail } from '@/components/home';
import { CtaBand } from '@/components/ui';
import { LatestPosts } from '@/components/LatestPosts';
import type { Metadata } from 'next';
import { withLegacySeo } from '@/lib/seo';

export const metadata: Metadata = withLegacySeo('/', {});

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
      <LatestPosts />
      <CtaBand />
    </>
  );
}
