import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "shared/ui/Input/Input";
import { AuthDto } from "features/AuthByUsername/model/schemas/auth.schemas";
import { useAuth } from "shared/lib/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import styles from "pages/SignUp/ui/SignUp.module.scss";

export const SignUpForm = memo(() => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { control, handleSubmit, reset } = useForm<AuthDto>();

  const { mutate } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (data: AuthDto) => signUp(data),
    onSuccess: async () => {
      reset();
      navigate("/");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.warn("Ошибка регистрации QUERY", error);
    },
  });

  const onSubmit: SubmitHandler<AuthDto> = async (data) => {
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
        <Button
          className={styles.myButton}
          theme={ButtonTheme.RED}
          size={ButtonSize.L}
          type="submit"
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      </div>
    </form>
  );
});
