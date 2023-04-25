import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
//import {} from 'react-icons';
import './NavbarStyles.css';
import "./LoginForm.css";


const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    function handleScroll() {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0, 
        behavior: 'smooth',
      });
    }


    function scrollToTop(){
      window.scroll({
        top: 0,
        behavior: 'smooth',
    });
    }

  return (
    <div className='header'>
      <Link onClick={scrollToTop}><h1>GrabYourCoffee</h1></Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li>  
            <Link to='/home'> Home</Link>
        </li>
        <li>  
            <Link onClick={handleScroll}> About us</Link>
        </li>
        <li>
            <Link to='/products'>Products</Link>
        </li>
        <li>
            <Link to='/contacts'>Contact</Link>
        </li>

        <li>
          <button id='buy_button'><Link to='/signup'>Sign up</Link> </button>
            
        </li>

      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: '#fff'}}/>) : ( <FaBars size={20} style={{color: '#fff'}}/>)}
       
      </div>

      
    </div>
  )
}

export default Navbar;
