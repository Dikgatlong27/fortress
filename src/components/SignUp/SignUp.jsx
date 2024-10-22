import React, { useState } from 'react'

import './SignUp.css'



const SignUp = () => {

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account Created Successfully')
  }
  
  return (
    <div  className='signup-auth setion__padding'>
      <h2>Create Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" value={name} onChange={(e) => setname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone Number</label>
          <input type="phone" value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)}  required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
        </div>
      </form>
      <button type="submit">Sign Up</button>
    </div>
  )
}

export default SignUp
