import React, { useState } from 'react'

import './SignIn.css'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Sign In Successful');
      localStorage.setItem('isAuthenticated', 'true')
    } else {
      alert('Invalid Credentials')
    }   
  }

  return (
    <div  className='signup-auth setion__padding'>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  required />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  required />
        </div>
      </form>
      <button type="submit">Sign In</button>
    </div>
  )
}

export default SignIn
