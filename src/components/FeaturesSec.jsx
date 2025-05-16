import React, { useEffect }  from 'react'
import FeaturesCard from './FeaturesCard'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FeaturesSec = () => {


   useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className='max-w-[1170px] mx-auto py-[120px] space-y-[72px]'>
      <div className='text-center'>
        <h4 className='font-outfit font-[600] text-[16px] text-[#9FE870]'>FEATURES</h4>
        <h3 className='font-urbanist font-bold text-[40px] text-white'>What You Can Do with Invoicer</h3>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <FeaturesCard />
      </div>
    </div>
  )
}

export default FeaturesSec
