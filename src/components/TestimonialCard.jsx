import React from 'react'
import { MdOutlineStar } from "react-icons/md";


const TestimonialCard = ({
    text = "Before Invoicer, I used to forget what I sold by evening. Now, everything is recorded — even my staff use it with ease. It's like having a full-time manager in my pocket",
    name = "Chioma Eze",
    position = "Owner of Chi-Chi Cosmetics, Aba",
    img = ""
}) => {

  return (
    <div className='lg:w-[419px] rounded-2xl py-8 px-6 space-y-8 bg-[#ffffff]'>
        {/* text and rating */}
      <div className='space-y-4'>
        <div className='flex'>
            <MdOutlineStar size={16} color='gold'/>
            <MdOutlineStar size={16} color='gold'/>
            <MdOutlineStar size={16} color='gold'/>
            <MdOutlineStar size={16} color='gold'/>
            <MdOutlineStar size={16} color='gold'/>
        </div>
        <p className='font-outfit font-[400] text-[16px] leading-[150%] text-[#4D525F]'>
            {text}
        </p>
      </div>

      {/* image and text */}
      <div className='flex gap-2'>
        {/* img */}
        <div className='w-[52px] h-[52px] rounded-[40px] overflow-hidden'>
            <img src={img} alt={`photo of ${name}`} className='w-full object-fit-cover'/>
        </div>
        {/* profile details */}
        <div className='font-outfit font-[400] text-[16px] text-[#4D525F] leading-[150%]'>
            <p>{name}</p>
            <p>{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
