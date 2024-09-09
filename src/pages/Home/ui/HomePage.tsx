import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "pages/Home/ui/HomePage.module.scss";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { useUserStore } from "app/providers/store";

export const HomePage = () => {
  const navigate = useNavigate();
  const { logout, user } = useUserStore();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
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
