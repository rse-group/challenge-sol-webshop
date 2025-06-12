import { Hero } from '@/commons/components'
import React from 'react'
import { getAsset } from '@/assets'

const DUMMY_BANNER =
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
const bannerSrc = getAsset('banner') ?? DUMMY_BANNER

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero banner={bannerSrc} />
    </div>
  )
}

export default LandingPage
