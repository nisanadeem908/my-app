import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.js'
import HomePage from './Components/HomePage.js'
import DetailsPage from './Components/DetailsPage.js';
import Login from './Components/Login.js';
import PrivateRoutes from './ProtectedRoute.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} exact/>
          <Route path="/details" element={<DetailsPage/>} />
          </Route>
         
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;