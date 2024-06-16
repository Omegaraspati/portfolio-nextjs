import Button from '@/components/Button'
import React from 'react'

const page = () => {
  return (
    <div>
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Contact Me..</h1>

    </div>

    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      
    <div className="flex justify-center gap-10">


    
      <a href ='https://wa.me/6285161807994' target='blank'>
          <Button type='button'
            title='WhatsApp'
            icon='/images/whatsapp.svg'
            variant='btn_dark_rounded'
          /></a>
          

          <a href ='https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=9i.marsya.nurma.g@gmail.com' target='blank'>
          <Button type='button'
            title=' Email'
            icon='/images/gmail.svg'
            variant='btn_dark_rounded'
          /></a>
    

   
</div>
      

      
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="/images/MobilePhoto.png"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
    </div>
  )
}

export default page