import React from 'react';

import { Newsletter, FooterOverlay } from '../../components'; 
import './Footer.css';

const Footer = () => (
  <div className='app__footer '>
    <Newsletter />
    <FooterOverlay />
  </div>
);

export default Footer;
