import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "src/shared/config/routeConfig/routeConfig";
import { useUserStore } from "src/app/providers/store";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuth } = useUserStore();
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
  }

  return children;
};
