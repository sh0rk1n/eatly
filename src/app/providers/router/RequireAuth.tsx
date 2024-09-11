import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const token = AccessTokenService.get();

  if (!token) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return children;
};
