import React from 'react'
import { PORTFOLIO } from '@/constants'
import Image from 'next/image'
import Button from './Button'

const Portfolio = () => {
  return (
    <section className='max-container padding-container gap-20 
    py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]'>
      <div className='text-center bold-18 uppercase 
      tracking-[1rem] text-blue-500 pb-20'>Portfolio</div>
  <ul className='mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto'>
    {
      PORTFOLIO.map((portfolio) => (
        <PortfolioItem
        key={portfolio.title}
        imgURL={portfolio.imgURL}
        title={portfolio.title}
        description={portfolio.description}
        />
      ))
    }
  </ul>
    </section>
  )
}

type PortfolioItem ={
  title: string;
  imgURL: string;
  description: string;
}

const PortfolioItem = ({ title, imgURL, description } : PortfolioItem ) => {
  return (
    <li className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group'>
      <div className='group-hover:scale-110 transition-all duration-1000'>
        <div>
        <Image src={imgURL} alt='map' width={444} height={444} />
        </div>
        <div className='px-6 py-4'>
          <h3 className='bold-18 lg:bold-20 my-4 capitalize'>{title}</h3>
          <p className='regular-16 text-gray-30 mb-4'>{description}</p>
          <div className='flex gap-1'>
          <Button type='button'
          title='Download CV'
          icon='/download.svg'
          variant='btn_dark_rounded
          '/>
          <Button type='button'
          title='Download CV'
          icon='/download.svg'
          variant='btn_dark_rounded
          '/>
          </div>
        </div>
      </div>
    </li>
  )
}
export default Portfolio