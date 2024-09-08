import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "src/pages/Home/ui/HomePage.module.scss";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";
import { useUserStore } from "src/app/providers/store";

export const HomePage = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useUserStore();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
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
