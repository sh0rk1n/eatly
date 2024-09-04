import { RouteProps } from "react-router-dom";
import { MainPage } from "src/pages/MainPage";
import { NotFoundPage } from "src/pages/NotFoundPage";
import { ProfilePage } from "src/pages/ProfilePage";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
  // last
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PROFILE]: "/profile/", // + :id
  // last
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
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
