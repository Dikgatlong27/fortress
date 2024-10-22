import React from 'react';
import { Navbar, FooterOverlay, SubHeading } from '../../components';

import './Locations.css'

const Locations = () => {
  return (
    <>
        <Navbar />
        <div className='app__locations'>
            <div className='app__locations-content section__padding'>
                <SubHeading title='Discover Our Exquisite Branches' />
                <h1 style={{ color: '#ccc'}}>Culinary Excellence Across Southern Africa</h1>
                <div className='line app__margin' />

                <p className='p__opensans'>Welcome to our Locations page, where we invite you on a journey through culinary excellence in some of the world's most vibrant destinations.</p>
                <p className='p__opensans'>From bustling city centers to serene coastal escapes, each of our fine dining establishments offers a unique blend of flavors, ambiance, and culture.</p>
            </div>
        
            <div className='app__locations-content app__bg section__padding'>
                <SubHeading title='New Branch Coming Soon' />
                <h1 style={{ color: '#ccc'}}>We are excited to introduce our forthcoming branch in Ezulwini, Swaziland.</h1>
                <div className='line app__margin' />

                <p className='p__opensans'>Set amidst the captivating landscapes and cultural tapestry of Swaziland, our restaurant will offer an unparalleled dining experience, blending local traditions with culinary innovation.</p> 
                <p className='p__opensans'>Stay tuned for updates as we prepare to bring our passion for exceptional dining to this enchanting corner of Southern Africa. Explore our current location below and anticipate the unveiling of our newest destination as we continue to redefine culinary excellence across Southern Africa.</p>
            </div>

            <div className='app__locations-maps section__padding'>
                <div className='app__locations-maps_Hatfield'>
                    <SubHeading title='Hatfield, Pretoria, South Africa' />

                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe title='directions' id="gmap_canvas" src="https://maps.google.com/maps?q=129%20Duxbury%20Rd,%20Hatfield,%20Pretoria,%200083&t=&z=15&ie=UTF8&iwloc=&output=embed">
                            </iframe>
                        </div>
                    </div>
                    <div>
                        <p className='p__opensans' id='branch-loc'>129 Duxbury Rd</p>
                    </div>
                </div>
                <div className='app__locations-maps_Ezulwini'>
                    <SubHeading title='The Gables Mall - Lombamba, Eswatini' />

                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe title='directions' id="gmap_canvas" src="https://maps.google.com/maps?q=the+gables+mall%2C+ezulwini%2C+&t=&z=13&ie=UTF8&iwloc=&output=embed">
                            </iframe>
                        </div>
                    </div>
                    <div>
                        <p className='p__opensans' id='branch-loc'>MR103 Ezulwini</p>
                    </div>
                </div>
            </div>
        </div>
        <FooterOverlay />
    </>
   
  )
}

export default Locations
