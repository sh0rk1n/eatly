import React, { ChangeEvent, memo, useEffect, useState } from "react";
import styles from "src/pages/Login/ui/MainPage.module.scss";
import axios from "axios";
import { API_URL } from "src/shared/api/api";

export const Login = memo(() => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    // TODO: деструктуризировать
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        const userData = response.data[0].users;
        setUsers(userData);
      } catch (err) {
        console.warn("Ошибка загрузки пользователей:", err);
      }
    };
    fetchUsers();
  }, []);

  const addLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
    console.log(login);
  };

  const addPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password);
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
