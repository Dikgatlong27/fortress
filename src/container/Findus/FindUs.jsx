import React from 'react';
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <h1 className="headtext__cursive" style={{marginBottom: '2rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Menlyn Maine Central Square, Shop 106<br /> 883 Garsfontein road., Pretoria East, South Africa</p>
        <p className="p__cursive" style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Sat: 10h00 - 22h00</p>
        <p className="p__opensans"> Sun: 10h00 - 21h00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}><a href='https://www.google.com/maps/place/Fortress+Restaurant/@-25.7860533,28.2797589,3601m/data=!3m1!1e3!4m6!3m5!1s0x1e9561cef1e2bf8f:0x1a503d2ed0d98eac!8m2!3d-25.7860533!4d28.2797589!16s%2Fg%2F11lvn01_b9?hl=en&entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D' target='_blank' rel="noreferrer">Visit Us</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.img3} alt="findus" />
    </div>
  </div>
);

export default FindUs;
