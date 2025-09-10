import HeroIntro from '@/components/about/HeroIntro';
import QuoteBlock from '@/components/about/QuoteBlock';
import Industries from '@/components/about/Industries';
import CallToActionBanner from '@/components/about/CallToActionBanner';
import AboutHighlights from '@/components/about/AboutHighlights';

export const revalidate = 60;

export default function AboutPage() {
  return (
    <div>
      <HeroIntro />
      <AboutHighlights />
      <QuoteBlock />
      <Industries />
      <CallToActionBanner />
    </div>
  );
}


