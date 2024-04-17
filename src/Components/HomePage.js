import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import load from './loading.gif';
import { useSelector, useDispatch } from 'react-redux';//allows components to extract data from store.
import { fetchImageData } from '../redux/reducers/homepagereducer';//action creator imported

function HomePage() {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();//dispatch function from the Redux store
  const { imageData = [], loading, error } = useSelector((state) => state.homepagereducer || {}); //select imagedata,loading,error from store

  useEffect(() => {
    dispatch(fetchImageData());//dispatch action to the store
  }, [dispatch]);

  const handleShowDetails = (clickedImage) => {
    navigate('/details', { state: { clickedImage } });
  }

  return (
    <div className="image-grid">
      {loading && (
        <div className="loading-container">
          <img className='nisa-loading' src={load} alt="Loading..." />
        </div>
      )}
      {error && (
        <div className="error-container">
          <p className="error-message">Error: {error}</p>
        </div>
      )}
      {!loading && imageData && imageData.map(image => (
        <div
          className="image-item"
          key={image.id}
          onMouseEnter={() => setHoveredId(image.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="image-container">
            <img src={image.download_url} alt={`Photo by ${image.author}`} className="image" />
            {hoveredId === image.id && (
              <button className="details-button" onClick={() => handleShowDetails(image)}>
                Show Details
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
