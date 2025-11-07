import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For client-side navigation
import { GrRestaurant } from 'react-icons/gr'; // Hamburger menu icon
import { MdOutlineRestaurantMenu } from 'react-icons/md'; // Close menu icon
import { StyleSheet, css } from 'aphrodite'; // For CSS-in-JS styling

import images from '../../constants/images'; // Import your logo

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // Mobile menu state

  const menuNames = ['Home', 'About', 'Contact', 'Menu', 'Vacancies', 'Gallery'];

  // Map menu names to routes
  const getRoute = (name) => {
    if (name.toLowerCase() === 'home') return '/'; // Home always root
    if (name.toLowerCase() === 'vacancies') return '/no-vacancies'; // Special case
    return '/' + name.toLowerCase().replace(/\s+/g, '-'); // Default: lowercase + hyphens
  };

  return (
    <nav className={css(styles.navbar)}>
      {/* Desktop Left Links */}
      <ul className={css(styles.navLinks)}>
        {menuNames.slice(0, 3).map((item) => (
          <li key={item} className={css(styles.linkItem)}>
            <Link to={getRoute(item)}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Logo */}
      <div className={css(styles.logo)}>
        <Link to="/">
          <img src={images.logo} alt="app logo" className={css(styles.logoImage)} />
        </Link>
      </div>

      {/* Desktop Right Links */}
      <ul className={css(styles.navLinks)}>
        {menuNames.slice(3).map((item) => (
          <li key={item} className={css(styles.linkItem)}>
            <Link to={getRoute(item)}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className={css(styles.smallScreen)}>
        <div className={css(styles.logoSmallScreen)}>
        <Link to="/">
          <img src={images.logo} alt="app logo" className={css(styles.logoImage)} />
        </Link>
      </div>
        <GrRestaurant
          fontSize={27}
          className={css(styles.icon)}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          // Aphrodite styles + global CSS class
          <div className={`${css(styles.overlay, styles.flexCenter)} slide-bottom`}>
            <MdOutlineRestaurantMenu
              fontSize={27}
              className={css(styles.closeIcon)}
              onClick={() => setToggleMenu(false)}
            />

            <ul className={css(styles.overlayLinks)}>
              {menuNames.map((item) => (
                <li
                  key={item}
                  className={css(styles.overlayItem)}
                  onClick={() => setToggleMenu(false)}
                >
                  <Link to={getRoute(item)}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// ---------------------------- STYLES ----------------------------

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #14362b 0%, #000000ca 99%)',
    padding: '1.5rem 2rem',
    position: 'fixed',
    top: 0,
    zIndex: 10,

    '@media (max-width: 1150px)': { 
      justifyContent: 'space-between',
      padding: '3rem 2rem',
    },
  },
  logo: { 
    cursor: 'pointer',
    '@media (max-width: 1150px)': { display: 'none' },
   },
  logoImage: {
    width: '150px',
    '@media (max-width: 2000px)': { width: '210px' },
    '@media (max-width: 1150px)': { width: '170px' },
    '@media (max-width: 650px)': { width: '130px' },
  },
  navLinks: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyle: 'none',
    '@media (max-width: 1150px)': { display: 'none' },
  },
  linkItem: {
    margin: '0 1rem',
    cursor: 'pointer',
    color: '#fff',
    ':hover': { color: '#ccc' },
    fontFamily: 'var(--font-alt)',
    fontSize: '16px',
  },
  smallScreen: {
    display: 'none',
    '@media (max-width: 1150px)': { display: 'flex' },
  },
  logoSmallScreen: { 
    color: 'var(--color-golden)',
    cursor: 'pointer',
    position: 'absolute',
    top: '2rem',
    left: '2rem',
   },
  icon: {
    color: 'var(--color-golden)',
    cursor: 'pointer',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'var(--color-green)',
    flexDirection: 'column',
    zIndex: 5,
    animationDuration: '0.5s',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    color: 'var(--color-golden)',
    cursor: 'pointer',
    position: 'absolute',
    top: '2rem',
    right: '2rem',
  },
  overlayLinks: {
    listStyle: 'none',
    textAlign: 'center',
  },
  overlayItem: {
    margin: '2rem',
    color: 'var(--color-golden)',
    fontSize: '2rem',
    textAlign: 'center',
    fontFamily: 'var(--font-base)',
    ':hover': { color: '#fff' },
  },
});
