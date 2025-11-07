import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Navbar, FooterOverlay, SubHeading } from '../../components';

const NoVacancies = () => {
  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Section Container */}
      <div className={css(styles.container)} id="vacancies">
        <div className={css(styles.inner)}>
          <SubHeading title="Vacancy Posts" />

          {/* Message Section */}
          <div className={css(styles.content)}>
            <h2 className={css(styles.heading)}>No Current Openings</h2>
            <p className={css(styles.message)}>
              We’ve filled all available positions at the moment. Please check
              back soon for new opportunities to join our team.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Overlay */}
      <FooterOverlay />
    </>
  );
};

export default NoVacancies;

// ---------------------------- STYLES ----------------------------

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--color-green)',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '2rem',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontFamily: 'var(--font-base)',
    color: 'var(--color-blue)',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'capitalize',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    lineHeight: '29.9px',
    fontSize: '30px',
    marginBottom: '1.5rem',
  },

  message: {
    color: '#fff',
    fontFamily: 'var(--font-alt)',
    fontSize: '18px',
    maxWidth: '600px',
    lineHeight: 1.6,
  },
});
