import React from 'react';

import './VacantPosts.css'


const VacantPosts = ( {title, description, url} ) => {
  return (
    <div>
        <div className="app__vacantPosts">
            <h3 className='p__cursive' style={{marginBottom:'1rem'}}>{title}</h3>
            <p className='p__opensans' style={{color:'#eee', marginBottom:'1rem'}}>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className='custom__button'>View Job Posting</a>
        </div>
    </div>
  )
}

export default VacantPosts
