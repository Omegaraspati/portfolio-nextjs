import Button from '@/components/Button'
import React from 'react'

const page = () => {
  return (
    <div>
      <div>
        <section className='max-container padding-container gap-20 
    py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]'>
          <div className='text-center bold-18 uppercase 
      tracking-[1rem] text-blue-500 pb-20'>Portfolio</div>
        </section>
      </div>
      <div className='text-center bold-18 uppercase 
      tracking-[1rem] text-blue-500 pb-20 pt-10 '>Mobile Photography </div>
       <a href ="#" className ='flex justify-center mx-auto pb-10'>
          <Button type='button'
            title='My Photography Gallery'
            icon='/readmore.svg'
            variant='btn_dark_rounded
          '/></a>

      <div className="grid border rounded-xl mx-24 gap-10 shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600">
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/MobilePhoto.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/1.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/2.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        
        
      
        
        <div>

        </div>
      </div>
      <div className="grid border pt-20 rounded-xl mx-24 gap-10 shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600">
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/3.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/4.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/8.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        
        
      
        
        <div>

        </div>
      </div>
      <div className='text-center bold-18 uppercase 
      tracking-[1rem] text-blue-500 pb-20 pt-10 '>Typhography </div>
      <a href ="#" className ='flex justify-center mx-auto pb-10'>
          <Button type='button'
            title='My Typography Gallery'
            icon='/readmore.svg'
            variant='btn_dark_rounded
          '/></a>
      <div className="grid border pb-20 rounded-xl mx-24 gap-10 shadow-sm divide-y overflow-hidden sm:flex sm:divide-y-0 sm:divide-x dark:border-neutral-700 dark:shadow-neutral-700/70 dark:divide-neutral-600">
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/Typography.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/10.png" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-[1_0_0%] bg-white dark:bg-neutral-800">
          <img className="w-full h-auto rounded-t-xl sm:rounded-se-none" src="/images/7.jpg" alt="Image Description" />
          <div className="p-4 border-t sm:px-5 dark:border-neutral-700">
            <p className="text-xs text-gray-500 dark:text-neutral-500">
              Taken by IPhone 11 Pro Max
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page