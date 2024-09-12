import React from "react";
import { useNavigate } from "react-router-dom";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import styles from "pages/Home/ui/HomePage.module.scss";
import { useAuthStore } from "app/providers/store/auth";
import { Navbar } from "widgets/Navbar";

export const HomePage = () => {
  /*const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    AccessTokenService.remove();
    localStorage.removeItem("userName");
    logout();
    navigate("/login");
  };*/

  return (
    <div>
      <Navbar />
    </div>
  );
};
