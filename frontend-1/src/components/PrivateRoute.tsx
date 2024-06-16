import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
