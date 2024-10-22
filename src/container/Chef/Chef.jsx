import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse" id='chef-img'>
      <img src={images.chef} alt="Sushi_Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Our Sushi Chef's Word" />
      <h1 className='headtext__cursive'>Our Main Objective</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Our commitment lies in delivering exceptional cuisine, crafted with passion and precision,</p>
        </div>
        <p className="p__opensans"> while ensuring that every aspect of your dining experience exceeds expectations. Whether you're celebrating a special occasion or simply indulging in a moment of culinary delight, we are dedicated to providing an unforgettable journey of flavors, ambiance, and impeccable service.</p>
      </div>

      <div className="app__chef-sign">
        <p>Tebogo</p>
        <p className="p__opensans">Sushi Chef</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>


  </div>
);

export default Chef;
