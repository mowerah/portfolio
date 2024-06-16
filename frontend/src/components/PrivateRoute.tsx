import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
