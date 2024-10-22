import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg p__opensans' id='about'>
      <div className="abt-section sliding-section--menu">
        <h2 className="abt-title">What to Expect</h2>
        <p className="abt-text">
          <strong style={{color: '#bbb'}}>An Exciting Menu:</strong> A fusion of African spices and Mediterranean zest, our menu offers an eclectic range of tantalizing options, from succulent grilled meats to fresh seafood and plant-based delicacies.
        </p>
      </div>

      <div className="abt-section sliding-section--atmosphere">
        <p className="abt-text">
          <strong style={{color: '#bbb'}}>Exhilarating Atmosphere:</strong> Whether you're enjoying a quiet dinner with family or a vibrant night out with friends, The Fortress delivers an inviting ambiance perfect for any occasion.
        </p>
      </div>

      <div className="abt-section sliding-section--location">
        <p className="abt-text">
          <strong style={{color: '#bbb'}}>Unmatched Location:</strong> Nestled in Menlyn Maine, Pretoria's lifestyle hub, The Fortress provides the perfect vantage point for a stylish night out, offering scenic views and an upscale, yet relaxed, dining environment.
        </p>
      </div>
  </div>
);

export default AboutUs;
