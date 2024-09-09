import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useUserStore } from "app/providers/store";
import { authService } from "features/AuthByUsername/model/services/auth";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "pages/Login/ui/Login.module.scss";

export const LoginForm = memo(() => {
  const { login, logout, user } = useUserStore();
  const [isLogin, setIsLogin] = useState(true); // TODO: убрать
  const { control, handleSubmit, reset } = useForm<AuthDto>();
  const navigate = useNavigate();

  const checkAuth = useCallback(async () => {
    if (!user) return;

    try {
      const authMe = await authService.getAuthMe();
      // eslint-disable-next-line
      authMe && login(authMe); // мейби по-другому как-нибудь придумать
    } catch (e) {
      console.log("Ошибка в авторизации!", e);
      logout();
    }
  }, [user]);

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogin = async (formData: AuthDto) => {
    // eslint-disable-next-line
    formData.name ? await registerUser(formData) : await loginUser(formData);
    reset();
  };

  const registerUser = async (formData: AuthDto) => {
    try {
      const registeredUser = await authService.registerUser(formData);
      login(registeredUser);
      setIsLogin(true);
    } catch (error) {
      console.log("Ошибка в регистрации", error);
    }
  };

  const loginUser = async (formData: AuthDto) => {
    try {
      const loggedUser = await authService.loginUser(formData);
      login(loggedUser);
      navigate("/");
    } catch (error) {
      console.error("Ошибка email/password", error);
    }
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
