import { TESTIMONIAL } from '@/constants'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { desc } from 'next-video/dist/cli/init.js'

const Testimonials = () => {
  return (
    <div>
    <section className='max-container padding-container gap-20 
    py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]'>
      <div className='text-center bold-18 uppercase 
      tracking-[1rem] text-blue-500 pb-20'>Portfolio</div>
    
  <ul className='mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3 w-[95%] m-auto'>
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
      <a
  className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
  href="/Portfolio"
>
  <span className="font-medium transition-colors group-hover:text-white"> Read More for My Portfolio </span>

  <span
    className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
  >
    <svg
      className="size-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>
    </section>
   
    </div>
  )
}

type TestimonialsItem = {
  title: string;
  imgURL: string;
  description: string;
}


const TestimonialsItem = ({ title, imgURL, description }: TestimonialsItem) => {
  return (
    <div>
    <li className='relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group'>
    <div className='group-hover:scale-100 transition-all duration-1000'>
      <div>
      <Image src={imgURL} alt='map' width={444} height={444} />
      </div>
      <div className='px-6 py-4'>
        <h3 className='bold-18 lg:bold-20 my-4 capitalize'>{title}</h3>
        <p className='regular-16 text-gray-30 mb-4'>{description}</p>
        <div className='flex gap-1'>
        </div>
      </div>
    </div>
  </li>
  </div>
  )
}

export default Testimonials