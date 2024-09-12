import React from "react";
import { useNavigate } from "react-router-dom";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import styles from "pages/Home/ui/HomePage.module.scss";
import { ProfilePage } from "pages/Profile";
import { useAuthStore } from "app/providers/store/auth";

export const HomePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    AccessTokenService.remove();
    localStorage.removeItem("userName");
    logout();
    navigate("/login");
  };

  return (
    <div className={styles.root}>
      <h1>Добро пожаловать на главную страницу!</h1>
      {/*   TODO: ВРЕМЕННО. НЕ ЗАБЫТЬ УДАЛИТЬ  */}
      <ProfilePage />
      <Button
        className={styles.button}
        theme={ButtonTheme.RED}
        size={ButtonSize.M}
        onClick={handleLogout}
      >
        ВЫЙТИ
      </Button>
    </div>
  );
};
