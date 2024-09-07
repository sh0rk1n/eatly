import React, { memo } from "react";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";
import styles from "src/pages/Login/ui/Login.module.scss";
import { Controller, useForm } from "react-hook-form";
import { AuthDto } from "src/features/AuthByUsername/model/schemas/auth.schemas";
import { Input } from "src/shared/ui/Input/Input";

export const SignUpForm = memo(() => {
  const { control, handleSubmit } = useForm<AuthDto>();

  const handleSignUp = () => {};

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <p>НОВИЧОК??? ЗАРЕГИСТРИРУЙСЯ!</p>
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
      <Button
        className={styles.buttonRegister}
        theme={ButtonTheme.RED}
        size={ButtonSize.XL}
        type="submit"
      >
        ЗАРЕГИСТРИРОВАТЬСЯ
      </Button>
    </form>
  );
});
