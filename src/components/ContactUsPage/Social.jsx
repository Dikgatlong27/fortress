import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import './Social.css'

const Social = () => {
  return (
    <div>
        <div id='social__links' className='app__contactUs-social_socialLinks flex__center'>
          <a href='https://www.instagram.com/fortress_forte/' target='_blank' rel='noreferrer'><FaInstagram color='White' size={35} /></a>
          <a href='https://web.facebook.com/profile.php?id=61567259488117&sk=about_privacy_and_legal_info' target='_blank' rel='noreferrer'><FaFacebookF color='White' size={35} /></a>
          {/* <a href='https://www.tiktok.com/@thechairman_forte' target='_blank' rel='noreferrer'><FaTiktok color='white' size={35} /></a> */}
          <a href='https://wa.me/27608384036' target='_blank' rel='noreferrer'><FaWhatsapp color='white' size={35} /></a>
        </div>
        <div className='app__contactUs-social_socialLinks flex__center' id='social__links-mobile'>
          <a href='https://www.instagram.com/fortress_forte/' target='_blank' rel='noreferrer'><FaInstagram color='White' size={25} /></a>
          <a href='https://web.facebook.com/profile.php?id=61567259488117&sk=about_privacy_and_legal_info' target='_blank' rel='noreferrer'><FaFacebookF color='White' size={25} /></a>
          {/* <a href='https://www.tiktok.com/@thechairman_forte' target='_blank' rel='noreferrer'><FaTiktok color='white' size={25} /></a> */}
          <a href='https://wa.me/27608384036' target='_blank' rel='noreferrer'><FaWhatsapp color='white' size={25} /></a>
        </div>
    </div>
  )
}

export default Social
