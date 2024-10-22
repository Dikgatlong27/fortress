import React from 'react';
import {  BsArrowLeftShort, BsArrowRightShort  } from 'react-icons/bs';

import { images } from '../../constants'
import './Gallery.css';
import { Link } from 'react-router-dom';

const galleryImages = [images.img1, images.img2, images.img3, images.img4, images.img5, images.img6, images.img7];

// const instagramLinks = [
//   'https://www.instagram.com/p/CyGGkFAMhZf/',
//   'https://www.instagram.com/p/CxvYhYmMFsr/',
//   'https://www.instagram.com/p/CxX2vhzNthA/',
//   'https://www.instagram.com/p/CyL-Sx5sR2n/',
// ]

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery app__bg flex__center'>
      <div className="app__gallery-content">
        <h1 className="headtext__cursive">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>Immerse yourself in the stunning 3D designs of Fortress Restaurant. Explore the captivating architecture and elegant interior spaces that define the essence of luxury dining.</p>
        <button type='button' className='custom__button'><Link to='/gallery page'>Explore</Link></button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div  key={`gallery_image-${index + 1}`}>

              <div className="app__gallery-images_card flex__center">
                <img src={image} alt="gallery" />
              </div>
              
              {/* <a href={instagramLinks[index]} target='_blank' rel='noreferrer' className="app__gallery-images_card flex__center">
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery__image-icon' />
              </a> */}

            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
