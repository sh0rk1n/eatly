import React, { memo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "shared/ui/Input/Input";
import { UserDto } from "entities/User";
import styles from "pages/SignUp/ui/SignUp.module.scss";
import { useAuthMutation } from "shared/lib/hooks/auth/useAuthMutation";
import { useAuth } from "shared/lib/hooks/auth/useAuth";

export const SignUpForm = memo(() => {
  const { signUp } = useAuth();
  const { mutate } = useAuthMutation<UserDto>(signUp, "signUp");
  const { control, handleSubmit } = useForm<UserDto>();

  const onSubmit: SubmitHandler<UserDto> = async (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
    </form>
  );
});
