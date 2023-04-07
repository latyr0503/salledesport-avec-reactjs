import React, { useState } from 'react'
import logo from "../images/logo.png";
import { Link } from 'react-scroll';


function Navbar() {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        }else{
            setNav(false)
        }
    }
    window.addEventListener("scroll", changeBackground);

  return (
    <div>
        <nav className={nav ? "nav active" : "nav"}>*
            <Link to="main" className='logo' smooth={true} duration={1000}>
                <img src={logo} alt="logo" />
            </Link>
            <input type="checkbox" className='menu-btn' id="menu-btn" />
            <label htmlFor="menu-btn" className='menu-icon'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={1000}>Header</Link></li>
                <li><Link to='features' smooth={true} duration={1000} >features</Link></li>
                <li><Link to='presentaion' smooth={true} duration={1000} >offer</Link></li>
                <li><Link to='about' smooth={true} duration={1000} >about</Link></li>
                <li><Link to='contact' smooth={true} duration={1000} >contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar