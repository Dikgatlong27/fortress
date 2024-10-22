import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div id='app__contactUs-contact'>
        
      <h2 className='app__contactUs-contact_info p__cursive' style={{color: '#95fdff', paddingBottom: '1rem'}}>Get in touch</h2>
      
      <p className='p__contact'>Email: <a href='mailto:info@fortressforte.co.za'>info@fortressforte.co.za</a></p>
      
      <p className='p__contact'>Phone: <a href='tel:+27608384036'>+27 60 838 4036</a></p>
      <div className="contactUs_whatsapp flex__center">
            <FaWhatsapp size={20} color= 'green' />
            <a className='p__opensans' style={{marginLeft: '1rem'}} href='https://wa.me/27608384036' target='_blank' rel='noreferrer'>WhatsApp</a>
          </div>

      <div>
        <h3>Address</h3>
        <p className='p__opensans'>Shop No. 106</p>
        <p className='p__opensans'>Menlyn Maine, Central Square</p>
        <p className='p__opensans'>883 Garsfontein Rd.</p>
        <p className='p__opensans'>Pretoria East, South Africa</p>
      </div>
      <div>
        <h3>Opening Hours</h3>
        <p className='p__opensans'>Mon - Sat: 10:00 - 22:00</p>
        <p className='p__opensans'>Sun: 10:00 - 21:00</p>
      </div>
        
    </div>
  )
}

export default GetInTouch
