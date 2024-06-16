"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Button from './Button'


const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col 
    flexCenter gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row'>
      <span className='max-container absolute top-64 left-44 h-[144px] w-[777px] bg-blue-400 rounded-full
      shadow-lg blur-[7rem] -z-10'></span>
      {/* LEFT */}
      <div className='relative z-20 flex flex-1 flex-col pt-16'>
        <h4 className='bold-20'>Hello,</h4>
        <h1 className='bold-48 lg:bold-64 relative'>I'm Marsya Nurma Guvita</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize'>
          A {' '}
          <span>
            <Typewriter
              words={['Content Creator', 'Administrator', 'Costumer Service', 'Editor']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className='regular-16 max-w-[555px] my-4'>Hallo..
          Perkenalkan saya Marsya Nurma Guvita lulusan SMA Negeri 27 Bandung. Saya memiliki bakat dan minat dibidang editing video dan Mobile Photography.</p>

        <div className='flexStart gap-1 pt-6'>
          <a href ='https://www.instagram.com/marsyaagn?igsh=M3JrYThveXN5OWth&utm_source=qrc' target='blank'>
          <Button type='button'
            title='Instagram'
            icon='/images/instagram.svg'
            variant='btn_dark_rounded'
          /></a>
          <a href='https://www.tiktok.com/@inigemay?_t=8nDGGMAaWW8&_r=1' target='blank'>
          <Button type='button'
            title='Tiktok'
            icon='/images/tiktok.svg'
            variant='btn_dark_rounded'
          /></a>
          <a href='https://youtube.com/@marsyaagn?feature=shared' target='blank'>
          <Button type='button'
            title='Youtube'
            icon='/images/youtube.svg'
            variant='btn_dark_rounded'
          /></a>
         
        </div>
      </div>

      {/* Right */}

      <div className='flex flex-1 xl:flexEnd'>
        <Image src='/images/MarsyaFoto1.png' alt='marsya' width={400} height={400} className='w-auto' />
      </div>
    </section>
  )
}

export default Hero