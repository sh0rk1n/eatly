import React, { ChangeEvent, memo, useEffect } from "react";
import styles from "src/pages/Login/ui/MainPage.module.scss";
import { fetchUsers } from "src/shared/api/api";
import { useStore } from "src/app/providers/store";

export const Login = memo(() => {
  const { login, password, users, isAuth, setLogin, setPassword, setIsAuth } =
    useStore();

  useEffect(() => {
    fetchUsers().then((userData) => {
      useStore.getState().setUsers(userData);
    });
  }, []);

  const addLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const addPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const currentUser = users.find(
      (user) => user.username === login && user.password === password,
    );

    if (currentUser) {
      setIsAuth(true);
    } else {
      alert("Неправильный логин или пароль");
    }
  };

  return (
    <div className={styles.root}>
      {isAuth ? (
        <div>ВЫ УСПЕШНО ВОШЛИ В АККАУНТ</div>
      ) : (
        <>
          <h1>ВХОД В АККАУНТ</h1>
          <div className={styles.inputs}>
            <input
              placeholder="ВВЕДИТЕ ЛОГИН: "
              onChange={addLogin}
              value={login}
            />
            <input
              placeholder="ВВЕДИТЕ ПАРОЛЬ: "
              onChange={addPassword}
              value={password}
            />
          </div>
          <button className={styles.button} onClick={handleLogin}>
            ВОЙТИ
          </button>
        </>
      )}
    </div>
  );
});
