import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "src/pages/Home/ui/HomePage.module.scss";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
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
