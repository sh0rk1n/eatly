import { RouteProps } from "react-router-dom";
import { NotFoundPage } from "src/pages/NotFoundPage";
import { ProfilePage } from "src/pages/ProfilePage";
import { MainPage } from "src/pages/MainPage";
import { Login } from "src/pages/Login";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  PROFILE = "profile",
  // last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: "/",
  [AppRoutes.MAIN]: "/main",
  [AppRoutes.PROFILE]: "/profile/", // + :id
  // last
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <Login />,
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
