import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom'; 
import { Home, About, Contact, Menu, Vacancies, GalleryPage, Signin, Signup, Reservation } from './pages';
import { TbBrandBooking } from "react-icons/tb";


import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  
    
    <div id='app'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/vacancies' element={<Vacancies />} /> 
        <Route path='/gallery page' element={<GalleryPage />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
      <Link to='reservation'><TbBrandBooking style={{color: '95fdff'}} className='booking-btn' /></Link>
      
    </div>
  
);

export default App;
