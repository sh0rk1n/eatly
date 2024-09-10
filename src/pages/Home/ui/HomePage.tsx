import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "pages/Home/ui/HomePage.module.scss";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useUserStore } from "app/providers/store";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";

export const HomePage = () => {
  const navigate = useNavigate();
  const { logout, user } = useUserStore();

  const handleLogout = () => {
    logout();
    AccessTokenService.remove(); // TODO: ????????????????
    navigate("/login");
  };

  return (
    <div className={styles.root}>
      <h1>Добро пожаловать на главную страницу!</h1>
      {user && <p>Привет, {user.name}</p>}
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
