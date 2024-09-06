import React, { ChangeEvent, memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "src/shared/api/axios";
import { useStore } from "src/app/providers/store";
import styles from "src/pages/Login/ui/Login.module.scss";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";

export const Login = memo(() => {
  const { users, login, password, setLogin, setPassword, setIsAuth } =
    useStore();
  const navigate = useNavigate();

  useEffect(() => {
    // запрос к бэку на получение User[]
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
      localStorage.setItem("isAuth", "true");
      navigate("/");
    } else {
      alert("Неправильный логин или пароль");
    }
  };

  const handleRegister = () => {};

  return (
    <div className={styles.root}>
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
      <div className={styles.buttons}>
        <Button
          className={styles.buttonLogin}
          theme={ButtonTheme.BLUE}
          size={ButtonSize.L}
          onClick={handleLogin}
        >
          ВОЙТИ
        </Button>
        <div>
          <p>НОВИЧОК??? ЗАРЕГИСТРИРУЙСЯ!</p>
          <Button
            className={styles.buttonRegister}
            theme={ButtonTheme.RED}
            size={ButtonSize.XL}
            onClick={handleRegister}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
        </div>
      </div>
    </div>
  );
});
