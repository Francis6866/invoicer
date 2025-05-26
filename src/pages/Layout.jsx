import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div>
        <section className='bg-[#163300]'>
            <Header />
        </section>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
