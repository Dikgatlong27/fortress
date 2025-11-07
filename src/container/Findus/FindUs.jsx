import { StyleSheet, css } from 'aphrodite';
import { images } from '../../constants';

const FindUs = () => (
  <div className={css(styles.wrapper)} id="contact">
    {/* ----------------- Info Section ----------------- */}
    <div className={css(styles.info)}>
      {/* Title */}
      <h1 className={css(styles.title)}>Find Us</h1>

      {/* Address and Opening Hours */}
      <div className={css(styles.content)}>
        <p className={css(styles.address)}>
          Menlyn Maine Central Square, Shop 106<br />
          883 Garsfontein Road, Pretoria East, South Africa
        </p>

        <p className={css(styles.openingLabel)}>Opening Hours</p>
        <p className={css(styles.hours)}>Mon - Sat: 10h00 - 22h00</p>
        <p className={css(styles.hours)}>Sun: 10h00 - 17h00</p>
      </div>

      {/* Visit Us Button */}
      <button className={css(styles.button)}>
        <a
          href="https://maps.app.goo.gl/baNFyQ5wPUisrCMv7"
          target="_blank"
          rel="noreferrer"
          className={css(styles.link)}
        >
          Visit Us
        </a>
      </button>
    </div>

    {/* ----------------- Image Section ----------------- */}
    <div className={css(styles.imageContainer)}>
      <img src={images.img3} alt="findus" className={css(styles.image)} />
    </div>
  </div>
);

export default FindUs;

// ---------------------------- STYLES ----------------------------
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '4rem 2rem',
    background: 'url(./assets/bg.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    '@media (max-width: 1150px)': {
      flexDirection: 'column',
      padding: '4rem 2rem',
      alignItems: 'center',
    },
    '@media (max-width: 650px)': {
      padding: '2rem 1rem',
    },
  },
  info: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '2rem',
    '@media (max-width: 1150px)': {
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  title: {
    fontFamily: 'var(--font-base)',
    color: 'var(--color-golden)',
    fontSize: '64px',
    lineHeight: '80px',
    fontWeight: 400,
    letterSpacing: '0.04em',
    textTransform: 'capitalize',
    marginBottom: '2rem',
    '@media (max-width: 1150px)': { fontSize: '48px', lineHeight: '60px', marginTop: '0' },
    '@media (max-width: 650px)': { fontSize: '35px', lineHeight: '50px', marginTop: '0' },
  },
  content: {
    marginBottom: '2rem',
  },
  address: {
    fontFamily: 'var(--font-alt)',
    color: 'var(--color-white)',
    fontSize: '16px',
    lineHeight: '28px',
    marginBottom: '1rem',
    '@media (max-width: 650px)': { fontSize: '14px', lineHeight: '22px' },
  },
  openingLabel: {
    fontFamily: 'var(--font-base)',
    color: '#dcca87',
    fontSize: '20px',
    margin: '2rem 0 1rem 0',
    '@media (max-width: 650px)': { fontSize: '18px' },
  },
  hours: {
    fontFamily: 'var(--font-alt)',
    color: 'var(--color-white)',
    fontSize: '16px',
    lineHeight: '28px',
    '@media (max-width: 650px)': { fontSize: '14px', lineHeight: '22px' },
  },
  button: {
    marginTop: '2rem',
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
    '@media (max-width: 650px)': { fontSize: '0.9rem', padding: '0.6rem 1.5rem' },
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  imageContainer: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    '@media (max-width: 1150px)': { marginTop: '3rem' },
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
    '@media (max-width: 650px)': { maxWidth: '100%' },
  },
});
