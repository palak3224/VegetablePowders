import React from 'react'
import HeroSection from './Components/Hero'
import AboutSection from './Components/AboutSection'
import TopProductsSection from './Components/TopProductsSection'


function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TopProductsSection />
    </div>
  )
}

export default Home