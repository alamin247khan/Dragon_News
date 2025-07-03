import React from 'react'
import Logo from '../assets/logo.png'

export default function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="flex flex-col items-center justify-center py-8">
        <div className="logo flex flex-col items-center">
            <img src={Logo} alt="Logo" className="w-auto h-16 mb-4" />
            <p className="text-center text-lg font-medium text-gray-700 mb-2">Journalism Without Fear or Favour</p>
            <p className="text-center text-sm text-gray-500">{currentDate}</p>
        </div>
    </div>
  )
}
