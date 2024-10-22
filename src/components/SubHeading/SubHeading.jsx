import React from 'react';

import { images } from '../../constants';

const SubHeading = ({title}) => (
  <div style={{ marginBottom : '1rem'}}>
    <p className="p__cursive">{title}</p>
    <img src={images.spoon} alt="spoon" style={{width: '55px'}} />
  </div>
);

export default SubHeading;
