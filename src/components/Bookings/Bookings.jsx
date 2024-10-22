import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { TablesMap, SubHeading } from '../../components';

import './Bookings.css';
// import PayInfo from './Payments/PayInfo';

const Bookings = () => {
  const [state, handleSubmit] = useForm('xyzyzkzr');
  if (state.succeeded) {
    return (
      <div className='app__bg flex__column' style={{padding: '3rem', height: '80vh'}}>
        <h3 style={{color: '#999', fontSize: '30px', fontWeight: 'bold', textAlign: 'center', padding: '3rem'}}>Reservation Confirmed!</h3>
        <p style={{color: '#aaa', fontSize: '17px', textAlign: 'center'}}>Thank you for your reservation.<br /> We've received your details and will contact you shortly to confirm your booking.</p>    
      </div>
    );
  }

  return (
    <div className='app__bookings app__bg section__padding flex__center'>
      <SubHeading title={'Reserve a Table'} />

      <form className="app__bookings-reservations " onSubmit={handleSubmit} action='https://formspree.io/f/xyzyzkzr' method='POST'>

        <div className='app__bookings-reservations_book app__bg'>
          <div className="form-group">
            <label htmlFor="name" className="form-label p__opensans">Name</label>
            <input id="name" type="text" name="name" placeholder="Your Name here..." className="custom__input" required />
            <ValidationError prefix='Name' field='name' errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label p__opensans">Email Address</label>
            <input id="email" type="email" name="email" placeholder="Your email here..." className="custom__input" required />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label p__opensans">Phone</label>
            <input id="phone" type="phone" name="phone" placeholder="Your phone number here..." className="custom__input" required />
            <ValidationError prefix='Phone' field='phone' errors={state.errors} />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label p__opensans">Message (Optional)</label>
            <textarea id="message" name="message" rows={4} placeholder='Special request, number of guests etc...' className="custom__input"></textarea>
            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </div>

          <div className='form-group'>
            <label htmlFor="date" className="form-label p__opensans">Select Date</label>
            <input id='date' type='date' name='date' className='custom__input' required />
            <ValidationError prefix='Date' field='date' errors={state.errors} />
          </div>

          <div className='form-group'>
            <label htmlFor="time" className="form-label p__opensans">Select Time</label>
            <input id='time' type='time' name='time' className='custom__input' required />
            <ValidationError prefix='Time' field='time' errors={state.errors} />
          </div>
        </div>

        <div className='app__bookings-reservations_tablesMap app__bg'>
          <div className="form-group">
            <TablesMap />
            
            {/* <PayInfo /> */}

            <button className="btn" type='submit' >Reserve</button>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default Bookings
