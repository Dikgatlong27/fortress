import { StyleSheet, css } from 'aphrodite';
import images from '../../constants/images';

const AboutUs = () => {
  return (
    <div className={css(styles.aboutUs)} id="about">
      {/* ---------- Section 1: Menu Experience ---------- */}
      <div className={css(styles.section)}>
        <h2 className={css(styles.title)}>What to Expect</h2>
        <p className={css(styles.text)}>
          <strong className={css(styles.highlight)}>An Exciting Menu:</strong> A fusion of African spices and Mediterranean zest, our menu offers
          an eclectic range of tantalizing options, from succulent grilled meats to fresh seafood and plant-based delicacies.
        </p>
      </div>

      {/* ---------- Section 2: Atmosphere ---------- */}
      <div className={css(styles.section)}>
        <p className={css(styles.text)}>
          <strong className={css(styles.highlight)}>Exhilarating Atmosphere:</strong> Whether you're enjoying a quiet dinner with family or a vibrant night out with friends, The Fortress delivers an inviting ambiance perfect for any occasion.
        </p>
      </div>

      {/* ---------- Section 3: Location ---------- */}
      <div className={css(styles.section)}>
        <p className={css(styles.text)}>
          <strong className={css(styles.highlight)}>Unmatched Location:</strong> Nestled in Menlyn Maine, Pretoria's lifestyle hub, The Fortress provides the perfect vantage point for a stylish night out, offering scenic views and an upscale, yet relaxed, dining environment.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

// ---------------------------- STYLES ----------------------------
const styles = StyleSheet.create({
  aboutUs: {
    backgroundImage: `url(${images.bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',

    // Layout
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    padding: '8rem 4rem 5rem 4rem',
    textAlign: 'center',

    // Responsive adjustments
    '@media (max-width: 1150px)': {
      padding: '8rem 4rem 4rem 4rem',
    },
    '@media (max-width: 650px)': {
      padding: '4rem 2rem',
    },
  },

  section: {
    width: '80%',
    maxWidth: '900px',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.4)',

    '@media (max-width: 650px)': {
      width: '100%',
    },
  },

  title: {
    fontFamily: 'var(--font-base)',
    color: 'var(--color-blue)',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'capitalize',
    lineHeight: '29.9px',
    fontSize: '30px',
    marginBottom: '1.5rem',

    '@media (max-width: 650px)': {
      fontSize: '24px',
    },
  },

  text: {
    fontFamily: 'var(--font-alt)',
    color: 'var(--color-white)',
    lineHeight: '1.8',
    fontSize: '16px',

    '@media (max-width: 650px)': {
      fontSize: '14px',
      lineHeight: '1.6',
    },
    '@media (max-width: 450px)': {
      fontSize: '12px',
    },
  },

  highlight: {
    color: '#bbb',
    fontWeight: 'bold',
  },
});
