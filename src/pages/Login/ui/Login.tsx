import React, { memo } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "features/AuthByUsername";
import styles from "pages/Login/ui/Login.module.scss";

export const Login = memo(() => {
  return (
    <div className={styles.root}>
      <LoginForm />
      <div className={styles.signUp}>
        <h1>НОВИЧОК??? ={">"} </h1>
        <Link to="/signup">ЗАРЕГИСТРИРУЙСЯ </Link>
      </div>
    </div>
  );
});
