import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "pages/NotFound";
import { HomePage } from "pages/Home";
import { Login } from "pages/Login";
import { SignUp } from "pages/SignUp";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  HOME = "home",
  SIGNUP = "signup",
  LOGIN = "login",
  // last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.SIGNUP]: "/signup",
  [AppRoutes.LOGIN]: "/login",
  // last
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <Login />,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.signup,
    element: <SignUp />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
