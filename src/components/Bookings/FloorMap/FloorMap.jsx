import React from 'react'
import { images } from '../../../constants'

import './FloorMap.css'

const FloorMap = () => {
  return (
    <div className='app__floor-map'>
        <h1 className='p__cursive'>Floor Map Coming Soon.</h1>
        <img src={images.gallery5} alt="floor" className='floor-map' />
    </div>
  )
}

export default FloorMap
