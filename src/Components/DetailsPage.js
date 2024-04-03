import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DetailsPage.css';

function DetailsPage() {
  const location = useLocation();
  const { imageData, clickedImage: initialClickedImage } = location.state;

  const [clickedImage, setClickedImage] = useState(initialClickedImage);
  const sliderRef = useRef(null);


  // this is a functipn to scroll the slide bar
  const scrollTo = (scrollOffset, image) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollOffset;
    }
    if (image) {
      setClickedImage(image);
    }
  };
  
  return (
    <div className="details-container">
      <div className="image-details">
        <div className="clicked-image">
          <img className='show-image' src={clickedImage.download_url} alt={`Photo by ${clickedImage.author}`} />
        </div>
        <div className="image-info">
          <h2>Image Details</h2>
          <p>Author: {clickedImage.author}</p>
          <p>Image Id: {clickedImage.id}</p>
          <p>Image Id: {clickedImage.id}</p>
        </div>
      </div>
      <div className="slider-container">
        <h2>Other Images</h2>
        <div className="slider" ref={sliderRef}>
          {imageData.map(image => (
            <div key={image.id} className="slider-item" onClick={() => scrollTo(0, image)}>
              <img className='show-image' src={image.download_url} alt={`Photo by ${image.author}`} />
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={() => scrollTo(-100, clickedImage)}>Previous</button>
        <button className="next-button" onClick={() => scrollTo(100, clickedImage)}>Next</button>

      </div>
    </div>
  );
}

export default DetailsPage;
