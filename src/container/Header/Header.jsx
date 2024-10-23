import React from 'react';
import { Link } from 'react-router-dom'; 

import './Header.css';
import { VacanciesPostsAtHome, SubHeading, SlidesAtHero } from '../../components';

import slides from '../../constants/CarouselDataAtHero'

const 
Header = () => (
  <div className="app__header">
    <VacanciesPostsAtHome />

    <div className="app__header-cont"  style={{marginTop: '4rem'}}>
      <div className="app__wrapper_info">
        <SubHeading title='Savor the Richness of African-Mediterranean Flavors' />
        <div className='header-content'>
          <img src="logo-landscape.png" alt="hero-logo" srcset="" />
          <p className="p__opensans" id='main-p'>A fusion of bold African flavors and Mediterranean flair. Stay tuned for a culinary experience like no other!</p>
        </div>
        
        <Link to='/reservation' className='custom__button home-rsv-btn'>Make a Reservation</Link>
      </div>
      <div className="app__wrapper_img">
        <h3 className='app__wrapper_img-header'>Featured Dishes</h3>
        <SlidesAtHero data={slides} />
      </div>
    </div>
    
  </div>
 
);

export default Header;
