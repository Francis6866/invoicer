import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const TestimonialText = () => {
  return (
    <div className='space-y-10'>
        {/* text */}
      <div className='space-y-3'>
        <div>
            <h3 className='font-outfit font-[600] text-[16px] text-[#163300]'>TESTIMONIAL</h3>
            <h4 className='font-urbanist font-bold text-[40px] text-[#01081B] leading-[120%]'>You Don't Have to Take Our Word for It</h4>
        </div>
        <div>
            <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>
                Hear from real shop owners who simplified their workflow with Invoicer.
            </p>
        </div>
      </div>

      {/* arrows */}
      <div className='hidden gap-3'>
        {/* 1 */}
        <div className='w-14 h-14 rounded-full border-[0.3px] p-4 bg-[#CFD0D1] flex justify-center items-center'>
            <button>
                <IoIosArrowBack size={24}/>
            </button>
        </div>

        {/* 2 */}
        <div className='w-14 h-14 rounded-full border-[0.3px] p-4 bg-[#01081B] flex justify-center items-center'>
            <button>
                <IoIosArrowForward size={24} color='white'/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialText
