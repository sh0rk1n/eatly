import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "pages/NotFound";
import { ProfilePage } from "pages/Profile";
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
  PROFILE = "profile",
  // last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.SIGNUP]: "/signup",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.PROFILE]: "/profile/", // + :id
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
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
