import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function AuthLayout() {
  return (
    <div className='font-poppins bg-[#F3F3F3]'>
        <header className='py-3 w-11/12 mx-auto'>
            <NavBar />
            {/* NavBar component should be imported from the appropriate path */}
        </header>
        <Outlet />
        {/* This Outlet will render the child routes of AuthLayout */}
    </div>
  )
}
