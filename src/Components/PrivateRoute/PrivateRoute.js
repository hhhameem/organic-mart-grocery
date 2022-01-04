import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let userTyper = localStorage.getItem("userType");
  let location = useLocation();

  if (!userTyper) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
