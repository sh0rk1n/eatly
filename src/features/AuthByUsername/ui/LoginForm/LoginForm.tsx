import React, { memo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";
import { useAuth } from "shared/lib/hooks/useAuth";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import styles from "pages/Login/ui/Login.module.scss";

export const LoginForm = memo(() => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { signIn } = useAuth();
  const { control, handleSubmit, reset } = useForm<AuthDto>();

  const { mutate } = useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: AuthDto) => signIn(data),
    onSuccess: async () => {
      reset();
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.warn("QUERY ОШИБКА", error);
    },
  });

  const onSubmit: SubmitHandler<AuthDto> = async (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>{"Страница авторизации"}</h1>
      <div className={styles.inputs}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input placeholder={"Введите email:  "} {...field} />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input placeholder={"Введите пароль: "} {...field} />
          )}
        />
        <Button
          className={styles.buttonLogin}
          theme={ButtonTheme.BLUE}
          size={ButtonSize.L}
          type="submit"
        >
          ВОЙТИ
        </Button>
      </div>
    </form>
  );
});
