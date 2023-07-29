import React from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./main/Header";
import HomeDetailPage from "./home/HomeDetailPage";
import SideBar from "./main/SideBar";

const AppRoutes = () => {
  const route = [
    {
      path: "*",
      element: <Navigate to="/dashboard" replace />,
    },
    {
      path: "/",
      element: <Header />,
      children: [
        {
          element: <SideBar />,
          children: [
            {
              path: "/dashboard",
              element: <HomePage />,
            },
            {
              path: "/dashboard/:id",
              element: <HomeDetailPage />,
            },
          ],
        },
        {
          path: "/account",
          element: <HomePage />,
        },
      ],
    },
  ];
  const routing = useRoutes(route);
  return routing;
};

export const Routes = () => {
  return (
    <BrowserRouter>
      {/* <AppAuth /> */}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default Routes;
