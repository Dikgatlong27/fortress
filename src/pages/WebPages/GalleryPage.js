import React from 'react';
import { Navbar, GalleryHeader, FooterOverlay, PhotoSliderHeader } from '../../components'; 

import { galleryImages } from '../../constants';


import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <>
      <Navbar />

      <GalleryHeader />  
      <div className='app__gallery-meal section__padding-new app__bg'>
        <h3 className='app__gallery-page_sub' style={{textAlign: 'center'}}>Savor the Flavors</h3>
        <div className='line' style={{marginBottom: '2rem'}} />
        <PhotoSliderHeader images={galleryImages.savorTheFlavors} />
      </div>
      
      <div className='app__gallery-meal'>
        <h3 className='app__gallery-page_sub' style={{textAlign: 'center', marginTop: '2rem'}}>Discover Our Space</h3>
        <div className='line' style={{marginBottom: '2rem'}} />
        <PhotoSliderHeader images={galleryImages.discoverOurSpace} />
      </div>
      
      <FooterOverlay />
    </>
  )
}

export default GalleryPage
