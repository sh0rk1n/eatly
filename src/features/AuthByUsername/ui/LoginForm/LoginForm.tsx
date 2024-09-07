import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { AuthDto } from "src/features/AuthByUsername/model/schemas/auth.schemas";
import { authService } from "src/features/AuthByUsername/model/services/auth";
import { useUserStore } from "src/app/providers/store";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";
import { Input } from "src/shared/ui/Input/Input";
import styles from "src/pages/Login/ui/Login.module.scss";

export const LoginForm = memo(() => {
  const { login } = useUserStore();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<AuthDto>();

  const handleLogin = async (data: AuthDto) => {
    try {
      const res = await authService.login(data);

      if (res?.token) {
        localStorage.setItem("token", res.token);
      } else {
        console.error("Токен не был получен в ответе.");
      }

      login(data);
      navigate("/");
    } catch (error) {
      console.error("Ошибка авторизации", error);
    }
  };

  return (
    <>
      <h1>ВХОД В АККАУНТ</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.inputs}>
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <Input placeholder={"ВВЕДИТЕ ЛОГИН: "} {...field} />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input placeholder={"ВВЕДИТЕ ПАРОЛЬ"} {...field} />
            )}
          />
        </div>
        <Button
          className={styles.buttonLogin}
          theme={ButtonTheme.BLUE}
          size={ButtonSize.L}
          type="submit"
        >
          ВОЙТИ
        </Button>
      </form>
    </>
  );
});
