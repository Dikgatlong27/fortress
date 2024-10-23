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
            Welcome to Fortress Restaurant, where the rich heritage of African Mediterranean cuisine meets elegance and culinary mastery to create unforgettable dining experiences. At Fortress, we pride ourselves on offering a perfect fusion of bold African flavors and Mediterranean sophistication, combined with refined service and a stylish atmosphere, ensuring every visit is truly remarkable.
          </p>
          <GiChefToque fontSize={50} className='icon' />
          <p className="p__opensans">
            Our mission is to provide guests with an unparalleled dining experience—merging the finest ingredients with impeccable preparation and a deep attention to detail. From the moment you step into our doors, we aim to captivate your senses with flavors that blend the best of Africa and the Mediterranean, presented with warmth and artistry in every dish.
          </p>
          <GiCrown fontSize={50} className='icon' />
          <p className="p__opensans">
            Our vision is to establish Fortress as the premier destination for luxury African Mediterranean dining, renowned not only in Pretoria but far beyond. We are committed to innovation, quality, and excellence in every aspect of hospitality, ensuring that each visit leaves a lasting impression. Whether celebrating a special occasion or simply enjoying an evening out, every moment at Fortress promises to be extraordinary.
          </p>
        </div>
      </div>
      <FooterOverlay />
    </>
  )
}

export default AboutUs
