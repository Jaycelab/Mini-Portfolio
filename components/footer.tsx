'use client'

import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import Social from '@/components/social'

const Footer = () => {
  return (
    <section className='bg-primary/90 py-2'>
      <div className='container flex flex-col items-center justify-between gap-3 xl:flex-row'>
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image src='/logo.png' width={54.08} height={336.65} alt='logo' />
        </Link>
        <Social />
        <p className='text-l font-semibold uppercase'>
          {' '}
          ® 2025 <span className='under-line'>Jayce</span>lab
        </p>
      </div>
    </section>
  )
}

export default Footer
