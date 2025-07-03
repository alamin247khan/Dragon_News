import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'

export default function NavBar() {
  return (
    <div className='flex justify-between items-center'>
        <div></div>
        <div className="nav space-x-5">
            <Link to='/'>Home</Link>
            <Link to='/career'>Career</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className="login flex items-center gap-2">
            <img src={userIcon} alt="user" className='w-8' />
            <button className='btn btn-neutral rounded-none'>Login</button>
        </div>
    </div>
  )
}
