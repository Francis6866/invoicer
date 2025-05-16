import React from 'react'
import cta from '../assets/images/cta.jpg'
import apple from '../assets/images/Apple.png'
import playstore from '../assets/images/Playstore.png'

const CTA = () => {
  return (
    <div className='bg-[#163300] max-md:px-5 py-30'>
        {/* remember px */}
      <div className='max-w-[1170px] mx-auto rounded-[16px] overflow-hidden' style={{ backgroundImage: `url(${cta})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='bg-[#0000009a] py-40 lg:px-[295px] space-y-10 flex flex-col items-center justify-center'>
            {/* text */}
            <div className='space-y-3  text-[#ffffff] text-center'>
                <h3 className='font-urbanist font-bold text-[40px] leading-[120%]'>Start Managing Your Store Smarter — for Free</h3>
                <p className='font-outfit font-[400] text-[16px] leading-[150%]'>No card required. Just sign up and take control.</p>
            </div>

            {/* playstore and apple */}
            <div className='flex gap-4'>
                <div className='w-[144px] h-[48px] bg-black rounded-[7.5px] flex items-center justify-center gap-2'>
                            <div className='w-[24px] h-[28px]'>
                              <img src={apple} className='w-full object-cover'/>
                            </div>
                            <div className='font-poppins text-white'>
                              <p className='text-[11px] font-[500]'>Download on the</p>
                              <p className='text-[21px] font-[500] -mt-2'>App Store</p>
                            </div>
                          </div>
            
                          <div className='w-[144px] h-[48px] bg-black rounded-[7.5px] flex items-center justify-center gap-2'>
                            <div className='w-[24px] h-[28px]'>
                              <img src={playstore} className='w-full object-cover'/>
                            </div>
                            <div className='font-poppins text-white'>
                              <p className='text-[11px] font-[500]'>GET IT ON</p>
                              <p className='text-[18px] font-[500] -mt-2'>Google Play</p>
                            </div>
                          </div>
                        </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
