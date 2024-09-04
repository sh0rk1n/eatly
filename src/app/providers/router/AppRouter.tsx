import { memo, Suspense, useCallback } from "react";
import {
  AppRoutesProps,
  routeConfig,
} from "src/shared/config/routeConfig/routeConfig";
import { Route, Routes } from "react-router-dom";

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={"1"}>{route.element}</Suspense>;

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
