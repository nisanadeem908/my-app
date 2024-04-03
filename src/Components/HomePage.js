import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css';
import load from './loading.gif';

function HomePage() {
  const [imageData, setImageData] = useState([]);
  const [hoveredId, setHoveredId] = useState(null); 
  const [loading, setLoading] = useState(true); //by default true to show loading
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=25')
      .then(response => response.json())
      .then(data => {
        setImageData(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setLoading(false); 
      });
  }, []);

  const handleShowDetails = (clickedImage) => {
    navigate('/details', { state: { imageData, clickedImage } });
  }

  return (
    <div className="image-grid">
      {loading && (
        <div className="loading-container">
          <img className='nisa-loading' src={load} alt="Loading..." />
        </div>
      )}
      {!loading && 
        imageData.map(image => (
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
        ))
      }
    </div>
  );
}

export default HomePage;
