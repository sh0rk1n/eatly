import React, { memo } from "react";
import styles from "./MainPage.module.scss";

export const MainPage = memo(() => {
  return (
    <div className={styles.root}>
      <h1>ВХОД В АККАУНТ</h1>
      <div className={styles.inputs}>
        <input placeholder="ВВЕДИТЕ ЛОГИН: " />
        <input placeholder="ВВЕДИТЕ ПАРОЛЬ: " />
      </div>
      <button className={styles.button}>ВОЙТИ</button>
    </div>
  );
});
