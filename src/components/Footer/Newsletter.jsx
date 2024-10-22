import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { SubHeading } from '../../components';

import './Newsletter.css';

const Newsletter = () => {
  const [state, handleSubmit] = useForm('mbljldjz');
  if (state.succeeded) {
    return <p className='app__bg' style={{color: '#aaa', fontSize: '17px', textAlign: 'center', padding: '3rem'}}>Thank you for joining Us!</p>
  }

  return (
    <div className='app__newsletter app__bg section__padding'>


      <SubHeading title='Subscribe' />

      <p className="p__opensans" style={{color: '#bbb', marginBottom: '2rem'}}>Subscribe to our newsletter for specials, events, and more delights.</p>
      
      <form id='subscription-form' onSubmit={handleSubmit} action='https://formspree.io/f/mbljldjz' method='POST'>        
        <input id="email" type="email" name="email" placeholder="Your email here..."  className="custom__input" errors={state.errors} />
        <ValidationError prefix='Email' field='email' />
      
        <button type="submit" className="custom__button" disabled={state.submitting}>Send</button>
      </form>

    </div>
)};

export default Newsletter;
