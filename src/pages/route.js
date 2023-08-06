import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Home from './homePage/home'
import SignIn from './signIn/signIn'
import SignUp from './signUp/signUp'
import Profile from './profile/profile'

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } /> 
        <Route path="/signin" element={<SignIn /> } /> 
        <Route path="/signup" element={<SignUp /> } /> 
        <Route path="/profile" element={<Profile /> } /> 
      </Routes>
    </BrowserRouter>    
  );
}

export default Routing;