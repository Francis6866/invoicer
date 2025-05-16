import React from 'react'

const SecurityText = () => {
  return (
    <div className='max-w-[1170px] mx-auto max-sm:text-center'>
        <div className=''>
            <h4 className='font-outfit font-[600] text-[16px] text-[#9FE870]'>
                Why Invoicer?
            </h4>
        </div>
        
        <div className='flex flex-col lg:flex-row justify-between max-sm:space-y-4'>
            <h3 className='font-urbanist font-bold text-[40px] text-[#FFFFFF]'>
                Simple. Fast. Built for Hustle.
            </h3>
            {/* right text */}
            <p className='font-outfit font-[400] text-[16px] text-[#FFFFFF] lg:w-[377px]'>
                Invoicer is made specifically for African SMEs — no complex features, no tech headaches. Just the tools you need to manage your store with ease.
            </p>
        </div>
     
    </div>
  )
}

export default SecurityText
