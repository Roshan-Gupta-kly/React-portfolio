import React from 'react'
import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
   <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        {/* <img className='mx-2 w-10' src={logo} alt="logo" /> */}
        <p className='text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>Roshan</p>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <FaLinkedin />
      <FaGithub />
      <FaTwitterSquare />
      <FaInstagram />
    </div>
   </nav>
  )
}

export default Navbar
