import React from 'react'

const ItWorksText = () => {
  return (
    <div className='max-w-[1170px] mx-auto'>
      <div className='max-sm:space-y-10 md:flex justify-between items-center'>
          {/* text */}
        <div className='max-sm:text-center'>
          <h4 className='font-outfit font-[600] text-[16px] text-[#163300] uppercase'>
              How Invoicer Works
          </h4>
          <h3 className='font-urbanist font-bold text-[40px] text-[#01081B]'>
              Simple Steps to Smarter Business
          </h3>
        </div>
        {/* button */}
        <div className='font-[600] font-outfit text-[16px] py-2 px-6 rounded-full bg-[#163300] text-center text-white'>
          <button type="button">Get Started Now</button>
        </div>
      </div>
    </div>
  )
}

export default ItWorksText
