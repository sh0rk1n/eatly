import React from "react";
import { useStore } from "src/app/providers/store";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "src/shared/config/routeConfig/routeConfig";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useStore();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return children;
};
