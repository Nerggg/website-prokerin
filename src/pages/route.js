import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Home from './homePage/home'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } /> 
      </Routes>
    </BrowserRouter>    
  );
}

export default Routing;
