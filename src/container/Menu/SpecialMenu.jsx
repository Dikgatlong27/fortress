import React from 'react';
import { Link } from 'react-router-dom'; 
import { IoBeerOutline } from "react-icons/io5";
import { FaCocktail } from "react-icons/fa";

import {  MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <h1 className='headtext__cursive'>Our Bar Menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer <IoBeerOutline style={{fontSize: '30px', color: '#95fdff', marginTop: '1rem'}} /> </p>
        
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu_menu_img">
        <img src={images.menu} alt="" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktails <FaCocktail style={{fontSize: '30px', color: '#95fdff', marginTop: '1rem'}} /></p>

        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'><Link to='/menu'>View Menu</Link></button>
    </div>

  </div>
);

export default SpecialMenu;
