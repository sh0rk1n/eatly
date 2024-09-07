import React, { ChangeEvent, memo, useState } from "react";
import styles from "src/pages/Login/ui/Login.module.scss";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";
import { LoginDto } from "src/features/AuthByUsername/model/schemas/login.schemas";
import { authService } from "src/features/AuthByUsername/model/services/auth";
import { useUserStore } from "src/app/providers/store";
import { useNavigate } from "react-router-dom";
import { Input } from "src/shared/ui/Input/Input";

export const LoginForm = memo(() => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const [login, setLogin] = useState(""); // пока заглушки, позже уберу
  const [password, setPassword] = useState(""); // пока заглушки, позже уберу

  const onChangeUsername = (value: string) => {
    setLogin(value);
  };

  const OnChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = async () => {
    const dto: LoginDto = {
      name: login,
      password,
    };
    try {
      const currentUser = await authService.login(dto);
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem("isAuth", "true");
        navigate("/");
      } else {
        alert("Неправильный логин или пароль");
      }
    } catch (err) {
      console.error("Ошибка авторизации", err);
    }
  };

  return (
    <>
      <h1>ВХОД В АККАУНТ</h1>
      <div className={styles.inputs}>
        <Input
          placeholder="ВВЕДИТЕ ЛОГИН: "
          onChange={onChangeUsername}
          value={login}
        />
        <Input
          placeholder="ВВЕДИТЕ ПАРОЛЬ: "
          onChange={OnChangePassword}
          value={password}
        />
      </div>
      <Button
        className={styles.buttonLogin}
        theme={ButtonTheme.BLUE}
        size={ButtonSize.L}
        onClick={handleLogin}
      >
        ВОЙТИ
      </Button>
    </>
  );
});
