import React, { useEffect } from 'react'
import img1 from '../assets/images/img1.png'
import img11 from '../assets/images/img11.png'
import line from '../assets/images/line.png'
import apple from '../assets/images/Apple.png'
import playstore from '../assets/images/Playstore.png'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Heros = () => {

  useEffect(() => {
    AOS.init()
  }, [])




  return (
    <div className='bg-[#33000011] max-md:space-y-8 md:flex md:flex-row-reverse md:items-center pt-6'>
        {/*image div */}
        <div className='lg:w-[40%]' data-aos="fade-down" data-aos-duration="1500">
            <img src={img11}  alt="Image of a happy customer" className='object-cover w-full' />
        </div>

        {/* write up */}
        <div className='lg:w-[50%] space-y-8 max-md:px-4' data-aos="fade-up" data-aos-duration="1500">
          <div className='space-y-2'>
            <div className='text-[16px] text-[#9FE870] font-[600] font-outfit'>
              <h4>Trusted by over 2,000 retailers and shop owners</h4>
            </div>

            <div className='relative text-[30px] md:text-[54px] text-white font-bold font-urbanist'>
              <div className='absolute right-0 top-10 md:top-16'>
                <img src={line} />
              </div>
            
              <p>Know watin Dey your Store. <br /> Every-time.</p>
            </div>

            <div className='max-w-[490px]'>
              <p className='text-[18px] text-[#DDDDDD] font-[400] font-outfit'>
                Track your Stock, record your sales, and send receipts with ease- Invoicer was built for the everyday hustlers and serious stop owner
              </p>
            </div>
          </div>

          {/* apple/playstore */}
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
  )
}

export default Heros
