import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { useAuth } from '../provider/AuthProvider'

export default function NavBar() {
  const { user, logOut } = useAuth();
  
  return (
    <div className='flex justify-between items-center'>
        <div></div>
        <div className="nav space-x-5">
            <Link to='/'>Home</Link>
            <Link to='/career'>Career</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className="login flex items-center gap-2">
            {user && <span className="text-sm font-medium">{user.displayName}</span>}
            <div className="avatar">
              <div className="w-8 h-8 rounded-full">
                <img 
                  src={user?.photoURL || userIcon} 
                  alt="user" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { e.target.src = userIcon; }}
                />
              </div>
            </div>
            {user ? (
              <button onClick={logOut} className='btn btn-neutral rounded-none'>Logout</button>
            ) : (
              <Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>
            )}
        </div>
    </div>
  )
}
