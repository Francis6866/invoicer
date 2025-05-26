import { useState } from 'react'
import { Link } from 'react-router-dom'
import Brand from './Brand'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    const [show, setShow] = useState(false)
    
      function handleToggleMenu(){
        setShow(!show)
      }
  return (
    <header className='bg-[#163300] max-w-[1170px] mx-auto max-md:px-5 font-urbanist flex flex-wrap justify-between items-center py-6 relative'>
      <Link to='/'>
        <Brand />
      </Link>

       {/* hamburger toggler */}
       <div className='md:hidden'>
        <div className='text-white'>
          <p onClick={handleToggleMenu}>
            <GiHamburgerMenu size={25}/>
          </p>
        </div>
      </div>

      <div className='hidden md:block'>
        <Navbar />
      </div>

      <div className='hidden md:block'>
        {/* get started button */}
        <div>
            <div className='font-[600] text-[16px] py-2 px-6 rounded-full bg-[#9FE870] text-center'>
                <button type="button">Get Started</button>
            </div>
        </div>
      </div>

      {
        show && 
        <MobileMenu handleToggleMenu={handleToggleMenu}/>
      }
    </header>
  )
}

export default Header
