import { Button, ButtonProps } from "@mui/material";
import { memo } from "react";

interface MyButtonProps extends ButtonProps {
  variant: "text" | "outlined" | "contained";
  size: "small" | "medium" | "large";
  bold?: boolean;
  borderRadius?: string;
}

export const MyButton = memo((props: MyButtonProps) => {
  const { children, variant, size, bold, borderRadius, ...otherProps } = props;
  const buttonStyles = {
    padding: {
      small: "8px 17px",
      medium: "12px 21px",
      large: "17px 26px",
    }[size],
    fontSize: {
      small: "8px",
      medium: "14px",
      large: "17px",
    }[size],
    ...(variant === "contained" && {
      backgroundColor: "#6c5fbc",
      color: "white",
    }),
    ...(variant === "text" && {
      backgroundColor: "none",
      color: "#606060",
    }),
    ...(variant === "outlined" && {
      border: "1.50px solid #6c5fbc",
      color: "#6c5fbc",
    }),
    borderRadius: borderRadius || (variant === "contained" ? "15px" : "12px"),
    textTransform: "none",
    ...(bold && { fontWeight: "bold" }),
  };
  return (
    <Button {...otherProps} sx={{ ...buttonStyles }} variant={variant}>
      {children}
    </Button>
  );
});
