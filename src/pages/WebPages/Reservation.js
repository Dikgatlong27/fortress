import React from 'react';

import { Navbar, FooterOverlay, Bookings } from '../../components'; 
import './Reservation.css';




const Reservation = () => {

    return (
        <div className='app__reservations'>
            <Navbar />
            <Bookings />
            <FooterOverlay />
        </div>
    )
}

export default Reservation
