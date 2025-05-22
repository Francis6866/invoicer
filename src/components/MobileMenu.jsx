import React from 'react'
import { HashLink } from "react-router-hash-link"

const MobileMenu = ({handleToggleMenu}) => {
  return (
    <>
      {/* mobile menu */}
      <div className='w-full h-screen absolute top-16 left-0 z-50 '>

        <div className='bg-[#000000c5] h-screen md:w-auto space-y-10 px-5'>
          {/* navigtion menu */}
          <div className='max-md:py-6'>
            <nav>
              <ul className='text-white text-center space-y-10'>
                <li onClick={handleToggleMenu}><HashLink smooth to='#features'>Features</HashLink></li>
                <li onClick={handleToggleMenu}><HashLink smooth to='#works'>How it works</HashLink></li>
                <li onClick={handleToggleMenu}><HashLink smooth to='#benefits'>Benefits</HashLink></li>
              </ul>
            </nav>
          </div>
          {/* get started button */}
          <div>
            <div className='font-[600] text-[16px] py-2 px-6 rounded-full bg-[#9FE870] text-center'>
              <button type="button">Get Started</button>
            </div>
          </div>
        </div>


      </div> 
    </>
  )
}

export default MobileMenu
