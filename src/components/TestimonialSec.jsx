import React, { useEffect } from 'react'
import TestimonialText from './TestimonialText'
import TestimonialCard from './TestimonialCard'
import chioma from '../assets/images/test-chioma.jpg'
import musa from '../assets/images/test-musa.jpg'
import tailor1 from '../assets/images/tailor.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swipess from './Swipess'


const TestimonialSec = () => {



  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className='py-[120px] lg:pl-3 max-md:px-5 bg-[#F6F6F6]'>
      <div className='flex gap-[20px] flex-col lg:flex-row lg:justify-between items-center justify-center' data-aos="fade-down-left" data-aos-duration="2000">
        <div className='lg:w-[30%]'>
          <TestimonialText />
        </div>

        {/* testimonial cards */}
        <div className='hidden lg:block w-[65%]'>
          <Swipess />
        </div>
        
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 lg:hidden'>
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

            <TestimonialCard 
                text="I run a busy tailoring shop, and tracking payments used to be stressful. With Invoicer, I can send invoices, see who has paid, and manage orders — all from my phone. It's made my business more organized and professional."
                name="Grace Okonkwo"
                position="Tailor & Fashion Designer, Enugu"
                img={tailor1}
            />
        </div>
      </div>
    </div>
  )
}

export default TestimonialSec
