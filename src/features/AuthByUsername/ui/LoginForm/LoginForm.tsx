import React, { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { AuthDto } from "src/features/AuthByUsername/model/schemas/auth.schemas";
import { authService } from "src/features/AuthByUsername/model/services/auth";
import { useUserStore } from "src/app/providers/store";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";
import { Input } from "src/shared/ui/Input/Input";
import styles from "src/pages/Login/ui/Login.module.scss";
import { axiosInstance } from "src/shared/api/axios";

export const LoginForm = memo(() => {
  const { login, logout, isAuth } = useUserStore();
  const { control, handleSubmit, resetField } = useForm<AuthDto>();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuth) return;

      try {
        const { data } = await axiosInstance.get("/auth_me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        login(data);
      } catch (e) {
        logout();
      }
    };
    void checkAuth();
  }, [isAuth]);

  useEffect(() => {
    const checkIsAuth = async () => {
      try {
        const { data } = await axiosInstance.get("/auth_me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        login(data);
      } catch (e) {
        logout();
      }
    };
    void checkIsAuth();
  }, []);

  const handleLogin = async (formData: AuthDto) => {
    if (formData.name) {
      try {
        const { data } = await axiosInstance.post("/register", formData);

        login(formData);
        localStorage.setItem("token", data.token);
      } catch (error) {
        console.log(error);
      }
      return;
    }

    try {
      const { data } = await axiosInstance.post("/auth", formData);

      login(formData);
      localStorage.setItem("token", data.token);
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
            name="email"
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
