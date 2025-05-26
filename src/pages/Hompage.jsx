import React from 'react'
import Header from '../components/Header'
import Heros from '../components/Heros'
import FeaturesSec from '../components/FeaturesSec'
import HowItWorks from '../components/HowItWorks'
import Security from '../components/Security'
import TestimonialSec from '../components/TestimonialSec'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Hompage = () => {
  return (
    <div>
        {/* Hero section */}
      <section className='bg-[#163300]'>
        <Header />
        <Heros />
      </section>
 
      <section className='bg-[#163300]' id='features'>
        <FeaturesSec />
      </section> 
      
      <section id='works'>
        <HowItWorks /> 
      </section>

      <section id='benefits'>
        <Security />
      </section>

      
      <section id='testimonials'>
        <TestimonialSec />
      </section>

      <section>
        <CTA />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Hompage
