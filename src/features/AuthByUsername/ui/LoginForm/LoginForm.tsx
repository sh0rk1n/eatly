import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";
import { useUserStore } from "app/providers/store";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "pages/Login/ui/Login.module.scss";
import { axiosInstance } from "shared/api/axios";

export const LoginForm = memo(() => {
  const { login, logout, isAuth, setIsAuth } = useUserStore();
  const [isLogin, setIsLogin] = useState(true);

  const { control, handleSubmit, reset } = useForm<AuthDto>();
  const navigate = useNavigate();

  // TODO: деструктуризировать axiosInstance, sign UP
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
        console.log("Ошибка в авторизации!", e);
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
        console.log("Ошибка в ПРОВЕРКЕ авторизации!", e);
        logout();
      }
    };
    void checkIsAuth();
  }, []);

  const handleLogin = async (formData: AuthDto) => {
    if (formData.name) {
      try {
        const { data } = await axiosInstance.post("/register", formData);

        setIsAuth(true);
        localStorage.setItem("token", data.token);
        setIsLogin(true);
      } catch (error) {
        console.log("Ошибка в регистрации", error);
      }
      return;
    }

    try {
      const { data } = await axiosInstance.post("/auth", formData);

      setIsAuth(true);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      console.error("Ошибка email/password", error);
    }
    reset();
  };

  return (
    <>
      <h1>{isLogin ? "ВХОД В АККАУНТ" : "РЕГИСТРАЦИЯ"}</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        {isLogin && (
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
        )}

        {!isLogin && (
          <div className={styles.inputs}>
            <Controller
              control={control}
              render={({ field }) => (
                <Input placeholder={"ВВЕДИТЕ ИМЯ: "} {...field} />
              )}
              name={"name"}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <Input placeholder={"ВВЕДИТЕ ПОЧТУ: "} {...field} />
              )}
              name={"email"}
            />
            <Controller
              control={control}
              render={({ field }) => (
                <Input placeholder={"ВВЕДИТЕ ПАРОЛЬ: "} {...field} />
              )}
              name={"password"}
            />
          </div>
        )}
        {isLogin ? (
          <>
            <Button
              className={styles.buttonLogin}
              theme={ButtonTheme.BLUE}
              size={ButtonSize.L}
              type="submit"
            >
              ВОЙТИ
            </Button>
            <p>НОВИЧОК??? ЗАРЕГИСТРИРУЙСЯ!</p>
            <Button
              className={styles.buttonRegister}
              theme={ButtonTheme.RED}
              size={ButtonSize.XL}
              onClick={() => setIsLogin(false)}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          </>
        ) : (
          <>
            <Button
              className={styles.buttonRegister}
              theme={ButtonTheme.RED}
              size={ButtonSize.XL}
              type="submit"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
            <p>УЖЕ ЕСТЬ АККАУНТ? ВОЙДИТЕ!</p>
            <Button
              className={styles.buttonLogin}
              theme={ButtonTheme.BLUE}
              size={ButtonSize.L}
              onClick={() => setIsLogin(true)}
            >
              ВОЙТИ
            </Button>
          </>
        )}
      </form>
    </>
  );
});
