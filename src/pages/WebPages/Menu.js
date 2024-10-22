import React from 'react';
import { Navbar, FooterOverlay } from '../../components'; 
// import { MenuData } from '../../constants';



import './Menu.css';


const Menu = () => {

  // const pdfURL = '#'

  return (
    <div className='app__menu'>
      <Navbar />  
      <div style={styles.container} className='app__bg'>
      <h1 style={styles.heading}>Menu Coming Soon</h1>
      <p style={styles.paragraph}>We're working on our menu, stay tuned for delicious updates!</p>
    </div>
      
      {/* <div className='about__h-one app__bg section__padding' style={{ textAlign: 'center'}}>
        <SubHeading  title={'Explore Our Delicious Menu'}/>   

        <div className='app__menu-hero'>
          
          <div className='app__menu-hero_kitchen flex__center'>
            <h2 className='app__menu-hero-menu_heading'>House Specialties</h2>
            <div className='line' />

            <div className='app__menu-hero_ourMenu'>
              
              {MenuData.kitchen.map((kitchen, index) => (
                <MenuItems key={kitchen.title + index} image={kitchen.image} title={kitchen.title} price={kitchen.price} tags={kitchen.tags} />
              ))}
            </div>
          </div>

          <div className='app__menu-hero_sushi flex__center'>
            <h2 className='app__menu-hero-menu_heading'>Sushi Delicacies</h2>
            <div className='line' />

            <div className='app__menu-hero_ourMenu'>
              {MenuData.sushi.map((sushi, index) => (
                <MenuItems key={sushi.title + index} image={sushi.image} title={sushi.title} price={sushi.price} tags={sushi.tags} />
              ))}
            </div>
          </div>

        </div>


        <div style={{marginBottom: '2rem'}}>
          <p className='p__cursive' style={{marginBottom: '2rem'}}>Click the button below to download the full menu:</p>
          <a href={pdfURL} target="_blank" rel="noopener noreferrer" className='custom__button'>Full Menu</a>
        </div>
      </div> */}
      <FooterOverlay />
    </div>
  )
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#dca867',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#95fdff',
    textAlign: 'center',
    maxWidth: '600px',
  },
};

export default Menu;