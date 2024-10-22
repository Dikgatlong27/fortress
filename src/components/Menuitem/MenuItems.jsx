import React, { useState } from 'react';

import './MenuItems.css';

const MenuItem = ( {image, title, price, tags} ) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };


  return (

  <div className='app__menuitem'>
    <div>
      <div className="app__menuitem-img"> 
        <img src={image} alt="meal" className= {isZoomed ? "zoomed" : ""}
        onClick={toggleZoom} />
      </div>
    </div>

    <div className='app__menuitem-content'>
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cursive" style={{ color: '#DCCA87' }}>{title}</p>
        </div>

        <div className="app__menuitem-dash" />

        <div className="app__menuitem-price">
          <p className="p__cursive">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: '#AAA' }}>{tags}</p>
      </div>
    </div>
    
  </div>
)
};

export default MenuItem;
