import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { StyleSheet, css } from 'aphrodite';
import { images } from '../../constants';

import { SubHeading } from '../../components';

const Newsletter = () => {
  const [state, handleSubmit] = useForm('mbljldjz');

  // Show thank you message if submission succeeded
  if (state.succeeded) {
    return (
      <div className={css(styles.thankYou)}>
        Thank you for joining Us!
      </div>
    );
  }

  return (
    <div className={css(styles.wrapper)}>
      {/* Subheading */}
      <SubHeading title="Subscribe" />

      {/* Description */}
      <p className={css(styles.description)}>
        Subscribe to our newsletter for specials, events, and more delights.
      </p>

      {/* Subscription Form */}
      <form
        id="subscription-form"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mbljldjz"
        method="POST"
        className={css(styles.form)}
      >
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email here..."
          className={css(styles.input)}
          errors={state.errors}
        />
        <ValidationError prefix="Email" field="email" />

        <button type="submit" className={css(styles.button)} disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

// ---------------------------- STYLES ----------------------------
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    minHeight: '200px',
    padding: '4rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${images.bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    '@media (max-width: 650px)': { padding: '3rem 1rem' },
  },
  thankYou: {
    width: '100%',
    textAlign: 'center',
    padding: '3rem',
    color: '#aaa',
    fontSize: '17px',
  },
  description: {
    fontFamily: 'var(--font-alt)',
    color: '#bbb',
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '2rem',
    '@media (max-width: 650px)': { fontSize: '14px', marginBottom: '1.5rem' },
  },
  form: {
    width: '590px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 620px)': { width: '100%' },
  },
  input: {
    width: '100%',
    fontFamily: 'var(--font-alt)',
    padding: '0.8rem 1rem',
    marginBottom: '1rem',
    fontSize: '1rem',
    borderRadius: '3px',
    border: '1px solid #ffffff4d',
    outline: 'none',
    backgroundColor: '#222121c1',
    color: 'var(--color-white)',
    ':hover': { border: '1px solid var(--color-golden)' },
  },
  button: {
    marginTop: '1rem',
    padding: '0.8rem 2rem',
    border: '1px solid var(--color-golden)',
    background: '#dca7673b',
    color: 'var(--color-white)',
    fontFamily: 'var(--font-base)',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.4s ease',
    ':hover': {
      background: 'var(--color-golden)',
      color: '#14362b',
    },
  },
});
