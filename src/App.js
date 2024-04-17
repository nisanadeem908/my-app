import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.js'
import HomePage from './Components/HomePage.js'
import DetailsPage from './Components/DetailsPage.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<DetailsPage/>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
