import React from 'react'
import DefaultLayout from '../../Layout/DefaultLayout'
import AboutSection from '../../Components/AboutSection'
import StatsSection from '../../Components/StatsSection'
import CategoriesSection from '../../Components/CategoriesSection'
import HeroLanding from '../../Components/HeroLanding'
import HeroLanding2 from '../../Components/HeroLanding2'
import HeroLanding3 from '../../Components/HeroLanding3'
import ProductSection from '../../Components/ProductSection'
import HeroLanding4 from '../../Components/HeroLanding4'

function Landing() {
  return (
    <DefaultLayout>
        {/* <HeroLanding /> */}
        {/* <HeroLanding2 /> */}
        {/* <HeroLanding3 /> */}
        <HeroLanding4 />
        <StatsSection />
        <CategoriesSection />
        <ProductSection />
        <AboutSection />
    </DefaultLayout>
  )
}

export default Landing
