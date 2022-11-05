import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler =  (e) => {
      if(!domNode.current?.contains(e.target)){
        handler();
      }
    }
    document.addEventListener('mousedown', maybeHandler);

    return() => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  }, [])

}

const NavLinks = () => {
  return(
  <>
    <a href="#works" className='navbar__link'><p>Works</p></a>
    <a href="#about" className='navbar__link'><p>About</p></a>
    <a href="#contact" className='navbar__link'><p>Contact</p></a>
    <Link to='/resume' target='_blank' className='navbar__link'><p>Resume</p></Link>
  </>
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => setToggleMenu(!toggleMenu);

  // let domNode = useClickOutside(() => {
  //   setToggleMenu(false)
  // })

  return (
    <div className="navbar">
        <div className="navbar__nav" >
        <div className="navbar__logo">
          <img src="/images/logo.png" alt="logo" />
          <h3>Olumide Ilesanmi<span>,a Frontend Developer</span></h3>    
        </div>

        <div className="navbar__menu-icons" onClick={handleClick}>
          <div className={toggleMenu && 'line1'}></div>
          <div className={toggleMenu && 'line2'}></div>
          <div className={toggleMenu && 'line3'}></div>
        </div>

        <div className="navbar__links">
          <NavLinks />
        </div>

        </div>

        <div className={toggleMenu ? "navbar__mobile active scale-up-center" : 'navbar__mobile'}>
          <NavLinks />
        </div>
  
    </div>
  )
}

export default Navbar