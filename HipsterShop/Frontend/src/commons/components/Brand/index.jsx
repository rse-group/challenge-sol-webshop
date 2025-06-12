import React from 'react'
import { Link } from "react-router";
import { getAsset } from '@/assets'

const logoSrc = getAsset('logo')

const Brand = ({ onCLick, isMobileFirst, showLogo }) => {
  const className = 'font-semibold normal-case text-xl flex items-center gap-2' + (isMobileFirst ? ' p-0 no-underline' : '')

  return (
    <Link
      to={'/'}
      onClick={onCLick}
      className={className}
    >
      {logoSrc && showLogo ? <img src={logoSrc} className='h-[1.1lh]' /> : null}
      HipsterShop
    </Link>
  )
}

export default Brand
