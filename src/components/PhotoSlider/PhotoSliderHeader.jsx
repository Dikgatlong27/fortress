import React, { useState } from 'react';

import './PhotoSliderHeader.css';

const PhotoSliderHeader = ({images}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const HandleCloseImage = () => {
    setSelectedImage(null);
  };


  return (
    <div iv className="app__gallery-page">
        
  
      <div className="app__gallery-page_container">
        {images.map((image, index) => (
          <div  key={`gallery_image-${index + 1}`} onClick={() => handleImageClick(image)}>
            <div className="app__gallery-page_card flex__center">
              <img src={image} alt={`gallery-${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      
      {selectedImage && (
        <div className='image-overlay' onClick={HandleCloseImage}>
          <div className='overlay-content'>
            <img src={selectedImage} alt="selected" />
          </div>
          
        </div>
      )}
    </div>
  )
}

export default PhotoSliderHeader
