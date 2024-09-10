import React, { memo } from "react";
import { SignUpForm } from "features/SignUp";
import styles from "./SignUp.module.scss";
export const SignUp = memo(() => {
  return (
    <div className={styles.root}>
      <SignUpForm />
    </div>
  );
});
