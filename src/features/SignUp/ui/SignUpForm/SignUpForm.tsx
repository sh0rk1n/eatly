import React, { memo } from "react";
import { Button, ButtonSize, ButtonTheme } from "src/shared/ui/Button/Button";
import styles from "src/pages/Login/ui/Login.module.scss";

export const SignUpForm = memo(() => {
  const handleSubmit = () => {};

  return (
    <div>
      <p>НОВИЧОК??? ЗАРЕГИСТРИРУЙСЯ!</p>
      <Button
        className={styles.buttonRegister}
        theme={ButtonTheme.RED}
        size={ButtonSize.XL}
        onClick={handleSubmit}
      >
        ЗАРЕГИСТРИРОВАТЬСЯ
      </Button>
    </div>
  );
});
