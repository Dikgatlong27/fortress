import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { StyleSheet, css } from 'aphrodite';

import { images } from '../../constants';

const galleryImages = [images.img1, images.img2, images.img3, images.img4, images.img5, images.img6, images.img7];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  // Function to scroll gallery images left or right
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    if (direction === 'left') current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  return (
    <div className={css(styles.gallery)}>
      {/* ------------------ Gallery Content ------------------ */}
      <div className={css(styles.galleryContent)}>
        <h1 className={css(styles.galleryTitle)}>Photo Gallery</h1>
        <p className={css(styles.galleryText)}>
          Take a visual journey through The Fortress Restaurant. Discover our beautifully designed interior, inviting dining areas, and the vibrant atmosphere that makes every visit memorable.
        </p>
        <button type="button" className={css(styles.button)}>
          <Link to="/gallery" className={css(styles.link)}>Explore</Link>
        </button>
      </div>

      {/* ------------------ Gallery Images ------------------ */}
      <div className={css(styles.galleryImages)}>
        <div className={css(styles.imagesContainer)} ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div key={`gallery_image-${index + 1}`} className={css(styles.imageCardWrapper)}>
              <div className={css(styles.imageCard)}>
                <img src={image} alt={`Gallery ${index + 1}`} className={css(styles.image)} />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className={css(styles.arrows)}>
          <BsArrowLeftShort className={css(styles.arrowIcon)} onClick={() => scroll('left')} />
          <BsArrowRightShort className={css(styles.arrowIcon)} onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

// ---------------------------- STYLES ----------------------------
const styles = StyleSheet.create({
  // Main gallery container with background image
  gallery: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4rem 2rem',
    flexWrap: 'wrap',
    backgroundImage: `url(${images.bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    '@media (max-width: 850px)': { padding: '4rem 2rem' },
    '@media (max-width: 650px)': { padding: '2rem 2rem 0 2rem', flexDirection: 'column' },
  },

  // Left content: heading, description, button
  galleryContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: '500px',
    paddingRight: '2rem',
    '@media (max-width: 1150px)': { minWidth: '100%', alignItems: 'center', textAlign: 'center', paddingRight: '0' },
  },

  galleryTitle: {
    fontFamily: 'var(--font-base)',
    color: 'var(--color-golden)',
    fontSize: '64px',
    lineHeight: '80px',
    textTransform: 'capitalize',
    marginBottom: '1.5rem',
    '@media (max-width: 1150px)': { fontSize: '48px', lineHeight: '60px' },
    '@media (max-width: 650px)': { fontSize: '35px', lineHeight: '50px' },
  },

  galleryText: {
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

  // Explore button
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

  link: {
    color: 'inherit',
    textDecoration: 'none',
  },

  // Right images container
  galleryImages: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '50%',
    position: 'relative',
    '@media (max-width: 1150px)': { maxWidth: '100%', margin: '5rem 0' },
  },

  imagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'scroll',
    width: 'max-content',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::-webkit-scrollbar': { display: 'none' },
  },

  imageCardWrapper: {
    marginRight: '2rem',
  },

  imageCard: {
    position: 'relative',
    minWidth: '300px',
    height: '445px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-width: 2000px)': { minWidth: '400px', height: '550px' },
    '@media (max-width: 650px)': { minWidth: '240px', height: '320px' },
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    transition: '0.5s ease',
    ':hover': { opacity: 0.35 },
  },

  arrows: {
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1rem',
  },

  arrowIcon: {
    color: 'var(--color-golden)',
    fontSize: '2rem',
    cursor: 'pointer',
    backgroundColor: 'var(--color-black)',
    borderRadius: '5px',
    ':hover': { color: 'var(--color-white)' },
  },
});
