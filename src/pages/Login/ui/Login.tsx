import React, { memo } from "react";
import { LoginForm } from "features/AuthByUsername";
import { SignUpForm } from "features/SignUp";
import styles from "pages/Login/ui/Login.module.scss";

export const Login = memo(() => {
  return (
    <div className={styles.root}>
      <LoginForm />
    </div>
  );
});
