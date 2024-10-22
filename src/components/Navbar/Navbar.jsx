import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

import { GrRestaurant } from "react-icons/gr";
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return  (
    <nav className='app__navbar'>
      
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/'>Home</Link></li>
        <li className='p__opensans'><Link to='/about'>About</Link></li>
        <li className='p__opensans'><Link to='/contact'>Contact</Link></li>
      </ul>
      <div className="app__navbar-logo">
        <Link to='/'><img src={images.chairman} alt="app logo" /></Link>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/menu'>Menu</Link></li>
        <li className='p__opensans'><Link to='/vacancies'>Vacancies</Link></li>
        <li className='p__opensans'><Link to='/gallery page'>Gallery</Link></li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <GrRestaurant fontSize={27} className='overlay__btn' onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/'>Home</Link></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/about'>About</Link></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/contact'>Contact</Link></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/menu'>Menu</Link></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/vacancies'>Vacancies</Link></li>
              
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/gallery page'>Gallery</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}


export default Navbar;
