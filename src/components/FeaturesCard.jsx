import React from 'react'
import tracking from '../assets/images/tracking.png'
import saleRecord from '../assets/images/sale-record.png'
import management from '../assets/images/management.png'
import report from '../assets/images/reports.png'

const FeaturesCard = () => {

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-7 justify-center'>
      <div className={`w-[270px] h-[292px] rounded-[16px] py-8 px-4 bg-[#F3F7FF] flex flex-col gap-10 justify-center items-center text-center`}>
        {/* icon */}
        <div>
            <img src={tracking} />
        </div>
        {/* write-up */}
        <div className='space-y-2'>
            <h2 className='text-[20px] font-bold font-urbanist'>Smart Inventory Tracking</h2>
            <p className='text-[16px] font-[400] font-outfit opacity-70'> Easily add, update, and monitor your product stock — never run out or overstock again.</p>
        </div>
      </div> {/* 1 */}
      
      <div className={`w-[270px] h-[292px] rounded-[16px] py-8 px-4 bg-[#FBF6EF] flex flex-col gap-10 justify-center items-center text-center`}>
        {/* icon */}
        <div>
            <img src={saleRecord} />
        </div>
        {/* write-up */}
        <div className='space-y-2'>
            <h2 className='text-[20px] font-bold font-urbanist'>Quick Sales Recording</h2>
            <p className='text-[16px] font-[400] font-outfit opacity-70'>Log every sale in seconds and see your daily income at a glance.</p>
        </div>
      </div> {/* 2 */}

      <div className={`w-[270px] h-[292px] rounded-[16px] py-8 px-4 bg-[#EEF9FE] flex flex-col gap-10 justify-center items-center text-center`}>
        {/* icon */}
        <div>
            <img src={management} />
        </div>
        {/* write-up */}
        <div className='space-y-2'>
            <h2 className='text-[20px] font-bold font-urbanist'>Customer Management</h2>
            <p className='text-[16px] font-[400] font-outfit opacity-70'>Track buyer history and manage repeat customers with ease.</p>
        </div>
      </div> {/* 3 */}

      <div className={`w-[270px] h-[292px] rounded-[16px] py-8 px-4 bg-[#F4EDFC] flex flex-col gap-10 justify-center items-center text-center`}>
        {/* icon */}
        <div>
            <img src={report} />
        </div>
        {/* write-up */}
        <div className='space-y-2'>
            <h2 className='text-[20px] font-bold font-urbanist'>Insightful Business Reports</h2>
            <p className='text-[16px] font-[400] font-outfit opacity-70'>See what's selling, what's not, and how your business is performing every day.</p>
        </div>
      </div> {/* 4 */}
    </div> 
  )
}

export default FeaturesCard
