import React, { memo } from "react";
import styles from "pages/Login/ui/Login.module.scss";
import { Controller, useForm } from "react-hook-form";
import { Input } from "shared/ui/Input/Input";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";

export const SignUpForm = memo(() => {
  const { control, handleSubmit, reset } = useForm<AuthDto>();

  return (
    <div>
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
    </div>
  );
});
