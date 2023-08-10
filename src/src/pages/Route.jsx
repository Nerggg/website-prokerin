import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./homePage/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import Main from "./mainPage/Main";
import AddProker from "./addProker/AddProker";
import Profile from "./profile/Profile";
import useStore from "./Store";
import MainDetail from "./mainPage/MainDetail";

function Routing() {
  const { isLogin, user } = useStore();
  console.log(isLogin, user);
  return (
    <BrowserRouter>
      {!isLogin ? (
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/main/:id" element={<MainDetail />} />
          <Route path="/addproker" element={<AddProker />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default Routing;
