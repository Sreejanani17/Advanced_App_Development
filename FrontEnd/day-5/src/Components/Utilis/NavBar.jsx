import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/navbar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <ul className="nav-links">
      <li className='nav1'><a href="/">Home</a></li>
      <li className='nav1'><a href="/about">AboutUs</a></li>
      <li className='nav1'><a href="/login">Login</a></li>
      <li className='nav1'><a href="/register">SignUp</a></li>
      <li className='nav1'><a href="/contactus">ContactUs</a></li>
      <li className='nav1'><a href="/ourservice">Our Service</a></li>
    </ul>
  </nav>
  )
}

export default NavBar