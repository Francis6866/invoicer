import React from 'react'
import TestimonialText from './TestimonialText'
import TestimonialCard from './TestimonialCard'
import chioma from '../assets/images/test-chioma.jpg'
import musa from '../assets/images/test-musa.jpg'

const TestimonialSec = () => {
  return (
    <div className='py-[120px] max-md:px-5 lg:pl-[135px] bg-[#F6F6F6]'>
      <div className='flex gap-[72px] flex-col lg:flex-row items-center justify-center'>
        <TestimonialText />

        {/* testimonial cards */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 '>
            <TestimonialCard 
                text="Before Invoicer, I used to forget what I sold by evening. Now, everything is recorded — even my staff use it with ease. It's like having a full-time manager in my pocket"
                name="Chioma Eze"
                position="Owner of Chi-Chi Cosmetics, Aba"
                img={chioma}
            />

            <TestimonialCard 
                text="I sell both wholesale and retail. Invoicer helps me know what's remaining, what's moving, and how much I've made in a day. I no longer need my notebook and calculator."
                name="Ibrahim Musa"
                position="Provisions Merchant, Kaduna"
                img={musa}
            />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSec
