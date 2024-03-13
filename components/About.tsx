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
            <span className='font-extrabold'> Loren ipusim</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam ducimus adipisci facere officiis, officia assumenda? Quidem, tenetur? Atque possimus optio omnis esse hic delectus eligendi aliquid iure architecto, quidem sint est doloremque ad corporis? Corrupti et consequuntur sapiente ipsum velit tempora nostrum vero nulla tempore asperiores nisi animi voluptatem magnam est explicabo aperiam quisquam facere dolores recusandae aliquam, consequatur ducimus. Sequi enim dolorem amet repudiandae quod voluptate temporibus quos accusantium odio error suscipit expedita voluptatibus numquam illo alias eum, porro excepturi molestiae sunt architecto, soluta a repellat. Officia reprehenderit repellendus itaque totam rerum ea eveniet asperiores quas quis id, enim doloremque odio voluptatum dolorem fugit nobis deleniti sapiente maxime tempora. Vero dolorem inventore tempora repellendus doloribus, ducimus id beatae.

          </p>
          <Button type='button'
          title='Read More'
          icon='/readmore.svg'
          variant='btn_dark_rounded
          '/>
        </div>
        <div className='flex-1 flexCenter'>
          <Image src='/about.png' alt='about' height={333} width={333} className='w-auto
          rounded-full shadow-sm'/>

        </div>
      </div>
    </section>
  )
}

export default About