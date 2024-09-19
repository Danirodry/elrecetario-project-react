import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import instagram_circled from '../../assets/instagram_circled.png'
import facebook_circled from '../../assets/facebook_circled.png'





const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/> 

      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>About Us</li>
      </ul>

      <div className='social-media'>
        <img src={instagram_circled} alt="" />
        <img src={facebook_circled} alt="" />

      </div>

    </div>
  )
}

export default Navbar
