import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import { SubHeading } from '../../components';

import { images } from '../../constants';
import './FooterOverlay.css';

const FooterOverlay = () => (
    <div className="app__footerOverlay">
      <div className="app__footerOverlay-contents section__padding flex__center">
        <div className='app__footerOverlay-aboutUs'>
          <SubHeading title='About Us' />
          
          <p className='p__opensans'>At The Fortress experience a culinary sanctuary where the flavors of Portuguese, Italian, Greek, and African cuisines come together. Our name reflects opulence and excellence, catering to those who savor life's exquisite pleasures.</p>
        </div>

        <div className="app__footerOverlay-img">
          <img src={images.mainLogo} alt="logo" />
          <p className="p__opensans" id='copyright'>&copy; 2025 fortress Restaurant. All rights reserved.</p>
        </div>

        <div className='app__footerOverlay-contactUs'>
          <SubHeading title='Contact Us' />

          <p className='p__opensans'>Ext 2, Menlyn Maine, Central Square, Waterkloof Glen</p>
          <p className='p__opensans'>Corner Corobay and, Aramist Ave</p>
          <p className='p__opensans'>Shop No. 106</p>
          <p className='p__opensans'>Pretoria East, South Africa</p>
          <div className="app__footerOverlay-contactUs_whatsapp flex__center">
            <FaWhatsapp size={20} color= 'green' />
            <a className='p__opensans' href='https://wa.me/27676228529' target='_blank' rel='noreferrer'>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  );
export default FooterOverlay;
