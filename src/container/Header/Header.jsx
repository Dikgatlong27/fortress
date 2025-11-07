// Import necessary dependencies and components
import { StyleSheet, css } from 'aphrodite'; // Aphrodite for styling with JS objects
import { SubHeading } from '../../components'; // Custom reusable SubHeading component
import images from '../../constants/images'; // Centralized image imports
import { Link } from 'react-router-dom'; // React Router for navigation between pages

// ---------------------------- COMPONENT ----------------------------
const Header = () => {
  return (
    <div className={css(styles.header)} id="home">
      {/* ---------------- LEFT TEXT SECTION ---------------- */}
      <div className={css(styles.info)}>
        {/* Subheading Component */}
        <SubHeading title="Experience Fine Dining at Its Best" />

        {/* Main Title */}
        <h1 className={css(styles.title)}>Welcome to Fortress Restaurant</h1>

        {/* Short Description */}
        <p className={css(styles.description)}>
          Discover our curated menu of exquisite dishes and signature cocktails — 
          crafted with passion and served in the heart of Menlyn Maine.
        </p>

        {/* CTA Button linking to Menu Page */}
        <button className={css(styles.button)}>
          <Link to="/menu" className={css(styles.link)}>Explore Menu</Link>
        </button>
      </div>

      {/* ---------------- RIGHT IMAGE SECTION ---------------- */}
      <div className={css(styles.imageContainer)}>
        {/* Restaurant Hero Image */}
        <img 
          src={images.header} 
          alt="restaurant welcome" 
          className={css(styles.image)} 
        />
      </div>
    </div>
  );
};

export default Header;

// ---------------------------- STYLES ----------------------------
const styles = StyleSheet.create({
  // Main header layout container
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(90deg, #14362b 0%, #dca76781 100%)',
    padding: '10rem  2rem 6rem 2rem',
    flexWrap: 'wrap', // Allows stacking on smaller screens
    '@media (max-width: 950px)': {
      flexDirection: 'column', // Stack vertically on mobile
      textAlign: 'center', // Center text for better UX on mobile
    },
    '@media (max-width: 650px)': {
      paddingBottom: '4rem', // Reduce padding on very small screens
    },
  },

  // Left text content
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.2rem', // Space between text elements
  },

  // Main title styling
  title: {
    fontFamily: 'var(--font-base)',
    fontSize: '3rem',
    fontWeight: 700,
    color: 'var(--color-golden)', // Gold text color
    letterSpacing: '0.04em',
    '@media (max-width: 650px)': {
      fontSize: '2rem', // Smaller on phones
    },
  },

  // Description text styling
  description: {
    color: '#fff',
    fontSize: '1.1rem',
    fontFamily: 'var(--font-alt)',
    lineHeight: 1.7,
    maxWidth: '500px',
    '@media (max-width: 950px)': {
      maxWidth: '100%', // Expand text area for smaller screens
      margin: '0 auto',
    },
  },

  // Button styling
  button: {
    marginTop: '1rem',
    border: '1px solid var(--color-golden)',
    background: 'transparent',
    color: 'var(--color-golden)',
    fontFamily: 'var(--font-base)',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.4s ease',
    ':hover': {
      background: 'var(--color-golden)', // Hover fill effect
      color: '#14362b', // Text color changes to dark green
    },
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    height: '100%',
  },

  // Right-side image container
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
  },

  // Image styling
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', // Subtle depth effect
  },
});
