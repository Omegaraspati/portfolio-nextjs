import React from 'react'
import Button from './Button'
import Image from 'next/image'

const About = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-20 mid:gap-20 lg:py-20 bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-blue-500 pb-20">About
      </div>
      <div className='flex flex-col gp-20 md:gap-28 xl:flex-row'>
        <div className='flex-1 flexCenter flex-col m-auto'>
          <p className='mb-8'>
            <span className='font-extrabold'> Hallo... </span>

            Perkenalkan saya Marsya Nurma Guvita lulusan SMA Negeri 27 Bandung. Saya memiliki bakat dan minat dibidang editing video dan Mobile Photography.
            Saya memiliki semangat yang tinggi dalam bekerja dan kemauan untuk belajar
            terhadap hal baru, mampu beradaptasi dengan lingkungan baru, sigap juga
            tanggap dalam bekerja dan berorientasi kepada hasil yang memuaskan. Saya terus
            belajar untuk mengembangkan keterampilan. Mampu mengatasi pekerjaan baik
            secara tim maupun individu.

          </p>
          <a href ="/About">
          <Button type='button'
            title='Read More'
            icon='/readmore.svg'
            variant='btn_dark_rounded
          '/></a>
        </div>
        <div className='flex-1 flexCenter'>
          <Image src='/images/AboutMarsya.jpg' alt='about' height={333} width={333} className='w-auto
          rounded-full shadow-sm'/>

        </div>
      </div>
    </section>
  )
}

export default About