import React, { memo } from "react";
import { LoginForm } from "src/features/AuthByUsername";
import { SignUpForm } from "src/features/SignUp";
import styles from "src/pages/Login/ui/Login.module.scss";

export const Login = memo(() => {
  return (
    <div className={styles.root}>
      <LoginForm />
      <SignUpForm />
    </div>
  );
});
