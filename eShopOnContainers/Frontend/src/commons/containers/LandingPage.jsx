import { Hero } from '@/commons/components'
import React from 'react'
import { getAsset } from '@/assets'

const DUMMY_BANNER = "/landing-page-bg.jpg";
const bannerSrc = getAsset('banner') ?? DUMMY_BANNER

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero banner={bannerSrc} />
    </div>
  )
}

export default LandingPage
