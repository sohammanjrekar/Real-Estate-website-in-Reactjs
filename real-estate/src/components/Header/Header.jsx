import React from 'react'

const Header = () => {
  return (
<section className='header-wrapper'>
    <div className='flexCenter paddings header-container innerWidth'>
        <img src='logo.svg' alt="logo" width={100}/>
        <div className='header-menu'>
            <a href=''>Residencies</a>
            <a href=''>Our Value</a>
            <a href=''>Contact Us</a>
            <a href=''>Get Started</a>
            <button className='header-button'><a href=''>Contact</a></button>
        </div>
    </div>
</section>
  )
}

export default Header