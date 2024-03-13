import About from '@/components/About'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <main>
      <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Testimonials />
      </>
    </main>
  )
}

export default page