import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>

        </div>
        <div className='navlinks'>
            <a className='active' href="/">Home</a>
            <a href="/contactus">Contact Us</a>
            <a href="/map">Map</a>

        </div>
    </nav>
  )
}

export default Navbar