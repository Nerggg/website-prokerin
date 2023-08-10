import React from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import Home from "./homePage/Home";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import Main from "./mainPage/Main";
import AddProker from "./addProker/AddProker";
import Profile from "./profile/Profile";
import useStore from "./Store";
import MainDetail from "./mainPage/MainDetail";
import SideBar from "./outlet/SideBar";

const AppRoutes = () => {
  const { isLogin } = useStore();

  const valid = isLogin;
  const routes = valid
    ? [
        {
          path: "*",
          element: <Navigate to="/main" replace />,
        },
        {
          path: "/",
          element: <Navigate to="/main" replace />,
        },
        {
          path: "/",
          element: <SideBar />,
          children: [
            {
              path: "/main",
              element: <Main />,
            },
            {
              path: "/main/:id",
              element: <MainDetail />,
            },
            {
              path: "/addproker",
              element: <AddProker />,
            },
            {
              path: "/profile",
              element: <Profile />,
            },
          ],
        },
      ]
    : [
        {
          path: "*",
          element: <Navigate to="/signin" replace />,
        },
        {
          path: "/",
          element: <Navigate to="/signin" replace />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ];
  //console.log(routes);

  let routing = useRoutes(routes);

  return routing;
};
function Routing() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default Routing;
