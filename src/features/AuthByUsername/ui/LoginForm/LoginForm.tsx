import React, { memo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "shared/lib/hooks/auth/useAuth";
import { Input } from "shared/ui/Input/Input";
import styles from "pages/Login/ui/Login.module.scss";
import { UserDto } from "entities/User";
import { useAuthMutation } from "shared/lib/hooks/auth/useAuthMutation";

export const LoginForm = memo(() => {
  const { signIn } = useAuth();
  const { mutate } = useAuthMutation<UserDto>(signIn, "auth");
  const { control, handleSubmit } = useForm<UserDto>();

  const onSubmit: SubmitHandler<UserDto> = async (data) => {
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
      </div>
    </form>
  );
});
