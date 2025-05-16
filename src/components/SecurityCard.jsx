import React, { useEffect } from 'react'
import securityBckImg from '../assets/images/securityBackgroundImg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SecurityCard = () => {

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div
      className='max-w-[1170px] mx-auto rounded-[16px] py-10 px-6 bg-[#F6F6F6] space-y-12 overflow-hidden'
      style={{ backgroundImage: `url(${securityBckImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      data-aos="zoom-in-up"  data-aos-duration="3000"
    >
       <div id='row1' className='space-y-10 lg:flex justify-between'>
          <div className='lg:w-[348px] px-6 space-y-6'>
            {/* bullet */}
            <div className='w-7 h-7 rounded-[14px] p-2 bg-[#ECF0FB]'>
              <div className='w-2.5 h-2.5 rounded-full bg-[#2E68FD]'></div>
            </div>
            {/* text */}
            <div>
              <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Made for African Businesses</h3>
               <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>We understand your hustle. From roadside shops to large-scale wholesale stores — Invoicer fits your flow.</p>             
            </div>
          </div>{/* 1 */}

          <div className='lg:w-[348px] px-6 space-y-6'>
            {/* bullet */}
            <div className='w-7 h-7 rounded-[14px] p-2 bg-[#ECF0FB]'>
              <div className='w-2.5 h-2.5 rounded-full bg-[#FC4343]'></div>
            </div>
            {/* text */}
            <div>
              <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Works Online & Offline</h3>
               <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>No internet? No wahala. Record sales and stock changes even when you're offline. Everything syncs when you're back online.</p>             
            </div>
          </div>{/* 2 */}

          <div className='lg:w-[348px] px-6 space-y-6'>
            {/* bullet */}
            <div className='w-7 h-7 rounded-[14px] p-2 bg-[#ECF0FB]'>
              <div className='w-2.5 h-2.5 rounded-full bg-[#08A965]'></div>
            </div>
            {/* text */}
            <div>
              <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Easy to Use — No Training Needed</h3>
               <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>No manuals. No technical lingo. If you can use WhatsApp, you can use Invoicer.</p>             
            </div>
          </div>{/* 3 */}
       </div>

       <div id='row2' className='space-y-10 lg:flex justify-between'>
          <div className='lg:w-[348px] px-6 space-y-6'>
            {/* bullet */}
            <div className='w-7 h-7 rounded-[14px] p-2 bg-[#ECF0FB]'>
              <div className='w-2.5 h-2.5 rounded-full bg-[#3B7793]'></div>
            </div>
            {/* text */}
            <div>
              <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>All-in-One Dashboard</h3>
               <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>Track sales, monitor stock, send receipts, and see how your business is doing — all from your phone or PC.</p>             
            </div>
          </div>{/* 1 */}

          <div className='lg:w-[348px] px-6 space-y-6'>
            {/* bullet */}
            <div className='w-7 h-7 rounded-[14px] p-2 bg-[#ECF0FB]'>
              <div className='w-2.5 h-2.5 rounded-full bg-[#D77E1B]'></div>
            </div>
            {/* text */}
            <div>
              <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Light & Fast App</h3>
               <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>Invoicer doesn't slow you down. It's fast, responsive, and won't eat up your data or phone space.</p>             
            </div>
          </div>{/* 2 */}

          <div className='lg:w-[348px] px-6 space-y-6'>
            {/* bullet */}
            <div className='w-7 h-7 rounded-[14px] p-2 bg-[#ECF0FB]'>
              <div className='w-2.5 h-2.5 rounded-full bg-[#932EFA]'></div>
            </div>
            {/* text */}
            <div>
              <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Invoicer is not just an app</h3>
               <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>it's a business partner that helps you grow and stay in control.</p>             
            </div>
          </div>{/* 3 */}
       </div>
    </div>
  )
}

export default SecurityCard


// <div className='w-[293px] rounded-[8px] pt-[48px] px-6 pb-6'>
//               <div className='relative'>
//                   <h4 className='font-urbanist font-bold text-[80px] text-[#F3F3F3]'>01</h4>
//                   <div className='w-12 h-12 mt-0 relative -top-12 left-4'>
//                       <img src={''} className='w-full object-cover'/>
//                   </div>
//               </div>
              
//               <div>
//                   <h3 className='font-urbanist font-bold text-[20px] text-[#01081B]'>Create your free account</h3>
//                   <p className='font-outfit font-[400] text-[16px] text-[#4D525F]'>No long forms — just your name, phone, and business name to get started.</p>
//               </div>
//             </div>