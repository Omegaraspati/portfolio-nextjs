import Button from '@/components/Button'
import React from 'react'

const page = () => {
  return (
    <div className ="pb-20">
      <div className='text-center bold-18 uppercase 
      tracking-[1rem] text-blue-500 pb-20 pt-20'>About Me</div>
     
        <section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Hallo..
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
      Perkenalkan saya Marsya Nurma Guvita lulusan SMA Negeri 27 Bandung. Saya memiliki bakat dan minat dibidang editing video dan Mobile Photography.
            Saya memiliki semangat yang tinggi dalam bekerja dan kemauan untuk belajar
            terhadap hal baru, mampu beradaptasi dengan lingkungan baru, sigap juga
            tanggap dalam bekerja dan berorientasi kepada hasil yang memuaskan. Saya terus
            belajar untuk mengembangkan keterampilan. Mampu mengatasi pekerjaan baik
            secara tim maupun individu.
      </p>

      <div className="mt-4 md:mt-8">
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
    </div>
  </div>

  <img
    alt=""
    src="/images/AboutMe.jpeg"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
    </div>
  )
}

export default page