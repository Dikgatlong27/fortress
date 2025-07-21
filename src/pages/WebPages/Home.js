import React from 'react';
import { Navbar } from '../../components';
import { AboutUs, FindUs, Footer, Gallery, Header } from '../../container';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      {/* <SpecialMenu /> */}
      {/* <Chef /> */}
      {/* <Intro /> */}
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
};

export default Home;
