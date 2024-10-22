import React from 'react';
import { Navbar } from '../../components'; 
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from '../../container';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </>
    
  )
}

export default Home
