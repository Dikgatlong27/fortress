import { Link } from 'react-router-dom';
import { IoBeerOutline } from "react-icons/io5";
import { FaCocktail } from "react-icons/fa";
import { StyleSheet, css } from 'aphrodite';

import { MenuItem } from '../../components';
import { images, data } from '../../constants';

const SpecialMenu = () => (
  <div className={css(styles.specialMenu)} id="menu">
    {/* ------------------ Title Section ------------------ */}
    <div className={css(styles.titleContainer)}>
      <h1 className={css(styles.title)}>Our Bar Menu</h1>
    </div>

    {/* ------------------ Menu Sections Container ------------------ */}
    <div className={css(styles.menuContainer)}>
      
      {/* Wine & Beer Section */}
      <div className={css(styles.menuSection)}>
        <p className={css(styles.sectionHeading)}>
          Wine & Beer <IoBeerOutline className={css(styles.icon)} />
        </p>
        <div className={css(styles.menuItems)}>
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      {/* Middle Menu Image */}
      <div className={css(styles.menuImageContainer)}>
        <img src={images.menu} alt="menu" className={css(styles.menuImage)} />
      </div>

      {/* Cocktails Section */}
      <div className={css(styles.menuSection)}>
        <p className={css(styles.sectionHeading)}>
          Cocktails <FaCocktail className={css(styles.icon)} />
        </p>
        <div className={css(styles.menuItems)}>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    {/* ------------------ "View Menu" Button ------------------ */}
    <div className={css(styles.buttonContainer)}>
      <button type="button" className={css(styles.button)}>
        <Link to="/menu" className={css(styles.link)}>View Menu</Link>
      </button>
    </div>
  </div>
);

export default SpecialMenu;

// ---------------------------- STYLES ----------------------------
const styles = StyleSheet.create({
  // Main container for Special Menu
  specialMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem 2rem',
  },

  // Title container: centers the main heading
  titleContainer: {
    textAlign: 'center',
  },

  // Main heading style
  title: {
    fontFamily: 'var(--font-base)',
    color: 'var(--color-golden)',
    fontSize: '64px',
    lineHeight: '80px',
    fontWeight: 400,
    letterSpacing: '0.04em',
    textTransform: 'capitalize',
    '@media (max-width: 1150px)': { fontSize: '48px', lineHeight: '60px' },
    '@media (max-width: 650px)': { fontSize: '35px', lineHeight: '50px' },
  },

  // Container holding Wine, Image, and Cocktails sections
  menuContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    margin: '2rem 0',
    '@media (max-width: 1150px)': { flexDirection: 'column', alignItems: 'center' },
  },

  // Each menu section (Wine or Cocktails)
  menuSection: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  },

  // Section heading for Wine or Cocktails
  sectionHeading: {
    fontFamily: 'var(--font-base)',
    fontWeight: 500,
    fontSize: '35px',
    lineHeight: '58.5px',
    letterSpacing: '0.04em',
    color: 'var(--color-white)',
    textAlign: 'center',
    marginBottom: '2rem',
    '@media (max-width: 650px)': { fontSize: '28px', lineHeight: '45px' },
  },

  // Icon next to section heading
  icon: {
    fontSize: '30px',
    color: '#95fdff',
    marginTop: '1rem',
  },

  // Container for the list of MenuItems
  menuItems: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },

  // Middle menu image container
  menuImageContainer: {
    width: '350px',
    margin: '0 2rem',
    '@media (max-width: 2000px)': { width: '450px' },
    '@media (max-width: 1150px)': { margin: '2rem 0', width: '80%' },
    '@media (max-width: 650px)': { width: '100%' },
  },

  // Image styling
  menuImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.4)',
  },

  // Button container at bottom
  buttonContainer: {
    marginTop: '15px',
    textAlign: 'center',
    '@media (max-width: 1150px)': { width: '100%' },
  },

  // Button styling with hover effect
  button: {
    padding: '0.8rem 2rem',
    border: '1px solid var(--color-golden)',
    background: 'transparent',
    color: 'var(--color-golden)',
    fontFamily: 'var(--font-base)',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.4s ease',
    ':hover': {
      background: 'var(--color-golden)',
      color: '#14362b',
    },
  },

  // Link inside button: removes default link styles
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
});
