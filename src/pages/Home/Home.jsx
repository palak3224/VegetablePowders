import React from 'react'
import HeroSection from './Components/Hero'
import AboutSection from './Components/AboutSection'
import TopProductsSection from './Components/TopProductsSection'
import BenefitsSection from './Components/BenefitsSection'
import CTAClosingSection from './Components/CTAClosingSection'


function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TopProductsSection />
      <BenefitsSection />
      <CTAClosingSection />
    </div>
  )
}

export default Home