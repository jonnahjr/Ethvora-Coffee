import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import IntroSection from '@/components/sections/IntroSection'
import OriginsSection from '@/components/sections/OriginsSection'
import CoffeeCollectionSection from '@/components/sections/CoffeeCollectionSection'
import ProcessingSection from '@/components/sections/ProcessingSection'
import TraceabilitySection from '@/components/sections/TraceabilitySection'
import HeritageSection from '@/components/sections/HeritageSection'
import GlobalReachSection from '@/components/sections/GlobalReachSection'
import CuppingCTASection from '@/components/sections/CuppingCTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <OriginsSection />
      <CoffeeCollectionSection />
      <ProcessingSection />
      <TraceabilitySection />
      <HeritageSection />
      <GlobalReachSection />
      <CuppingCTASection />
    </>
  )
}
