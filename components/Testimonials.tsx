import { TESTIMONIAL } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { desc } from 'next-video/dist/cli/init.js'

const Testimonials = () => {
  return (
    <section className='max-container padding-container gap-20 pb-32 
    md:gap-28 lg:py-20 xl:flex-row'>
      <div className='text-center bold-18 uppercase 
      tracking-[1rem] text-blue-500 pb-20'>Testimonials</div>
      <ul className='mt-12 grid gap-12 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto'>
        {
          TESTIMONIAL.map((testimonial) => (
            <TestimonialsItem
              key={testimonial.title}
              imgURL={testimonial.imgURL}
              title={testimonial.title}
              description={testimonial.description}
            />
          ))
        }
      </ul>
    </section>
  )
}

type TestimonialsItem = {
  title: string;
  imgURL: string;
  description: string;
}


const TestimonialsItem = ({ title, imgURL, description }: TestimonialsItem) => {
  return (
    <li className='relative flex w-full flex-1 flex-col p-6'>
      <div className='absolute -top-8'>
        <Image src={imgURL}alt='user' height={66} width={66} className='rounded-full shadow-x1 border-4 border-white' />
      </div>
      <div className='absolute -top-8 right-0'>
        <Image src='/quote.svg' alt='quote' height={44} width={44} />
      </div>
      <h3 className='bold-18 lg:bold-20 mt-8 capitalize'>{title}</h3>
      <p className='regular-16 text-gray-30 my-4'>{description}</p>
    </li>
  )
}

export default Testimonials