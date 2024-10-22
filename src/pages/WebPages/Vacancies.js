import React from 'react';
import { Navbar, FooterOverlay, SubHeading, VacantPosts} from '../../components'; 
import { vacanciesData } from '../../constants';

import './Vacancies.css'


const Vacancies = () => {
  return (
    <>
      <Navbar /> 
      <div className="section__padding" id='vacancies'>
        <SubHeading title='Vacancy Posts' />
          
        <div className="app__vacancieaPosts">
          <h2 className='app__vacanciesPosts-sub'>Featured Job Openings</h2>

          <div className="app__vacancieaPosts-posts">
      
            {vacanciesData.map((vacanciesData, index) => (
              <VacantPosts 
                key={vacanciesData.title + index} 
                title={vacanciesData.title} 
                description={vacanciesData.description}
                url={vacanciesData.link} />
            ))}

          </div>
        </div>
      </div>
      <FooterOverlay />
    </>
  )
}

export default Vacancies
