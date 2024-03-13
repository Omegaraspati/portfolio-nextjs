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
        <h1 className='bold-48 lg:bold-64 relative'>I'm Omegaraspati</h1>
        <h2 className='bold-28 lg:bold-32 text-[1.8rem] capitalize'>
          A {' '}
          <span>
            <Typewriter
              words={['FrontEnd Developed', 'BackEnd Developed', 'Gamer', 'Mechanic!']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className='regular-16 max-w-[555px] my-4'>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus dolores vel placeat fugiat corporis nisi quam cumque tempore fuga distinctio dolorum asperiores blanditiis aliquam ratione sint cupiditate magnam eum in voluptatem, ipsam maiores harum reprehenderit? Quas at, laboriosam quae eius maxime fugit nulla, voluptate nostrum nam nemo corrupti ipsa dicta saepe et. Reprehenderit praesentium molestiae quis libero! Numquam vel quibusdam voluptate dolorem totam cupiditate iusto quo veritatis culpa praesentium. Similique, vero sint eveniet earum accusamus dolorum enim repudiandae reiciendis, impedit corporis eligendi recusandae dignissimos optio neque voluptates voluptatum porro autem! Rerum expedita consequatur quia? Dolorum veritatis quasi illo corrupti! ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi quidem hic ex sint, sed
          voluptatibus porro dolorem adipisci quod delectus expedita!</p>
        <div className='my-5 flex flex-wrap gap-5'>
          <div className='flex items-center gap-2'>
            {
              Array(5).fill(1).map((_, index) => (
                <Image
                  src="/star.svg" alt="star"
                  key={index}
                  height={24}
                  width={24}
                />
              ))
            }
          </div>
        <p className='bold-18 lg:bold-20'>1100+ 
        <span className='regular-16 lg:regular-20'></span>Excellent Review</p>
        </div>
        <div className='flexStart gap-1 pt-6'>
          <Button type='button'
          title='Download CV'
          icon='/download.svg'
          variant='btn_dark_rounded
          '/>
          <Button type='button'
          title='Contact Me'
          icon='/right.svg'
          variant='btn_white_rounded
          '/>
        </div>
      </div>

      {/* Right */}

      <div className='flex flex-1 xl:flexEnd'>
        <Image src='/me.png' alt='me' width={350} height={488} className='w-auto'/>
      </div>
    </section>
  )
}

export default Hero