import React from "react";
import { useNavigate } from "react-router-dom";
import { AccessTokenService } from "features/AuthByUsername/model/services/access-token";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import styles from "pages/Home/ui/HomePage.module.scss";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AccessTokenService.remove(); // TODO: ????????????????
    navigate("/login");
  };

  return (
    <div className={styles.root}>
      <h1>Добро пожаловать на главную страницу!</h1>
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
