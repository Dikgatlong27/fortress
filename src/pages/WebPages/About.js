import React from 'react';
import { GiChefToque, GiCrown, GiForkKnifeSpoon } from "react-icons/gi";
import { Navbar, FooterOverlay, SubHeading  } from '../../components';

import './About.css';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="app__about app__bg section__padding">
        <SubHeading title={'About Us'} />
        <div className="app__about-content">
          <GiForkKnifeSpoon fontSize={50} className='icon' />
          <p className="p__opensans">
            Welcome to Fortress Restaurant, where elegance and culinary excellence come together to create unforgettable dining experiences. At Fortress, we pride ourselves on offering a perfect blend of exquisite cuisine, refined service, and a sophisticated atmosphere, making every visit truly remarkable.
          </p>
          <GiChefToque fontSize={50} className='icon' />
          <p className="p__opensans">
            Our mission is to provide our guests with a dining experience like no other—combining the finest ingredients with impeccable preparation and attention to detail. From the moment you walk through our doors, we aim to captivate your senses with flavors, presentation, and warmth that resonate in every dish.
          </p>
          <GiCrown fontSize={50} className='icon' />
          <p className="p__opensans">
            Our vision is to establish Fortress as the leading destination for luxury dining, renowned not only in the Ezulwini region but beyond. We are committed to delivering innovation, quality, and excellence in every aspect of hospitality, ensuring that each visit leaves a lasting impression. Whether celebrating a special occasion or simply enjoying an evening out, we strive to make every moment at Fortress extraordinary.
          </p>
        </div>
      </div>
      <FooterOverlay />
    </>
  )
}

export default AboutUs
