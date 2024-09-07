import { ChangeEvent, InputHTMLAttributes, memo } from "react";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    type = "text",
    value,
    readOnly,
    onChange,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className={className}
      type={type}
      value={value ?? ""} // ?? = пустая строка по умолчанию
      readOnly={readOnly}
      onChange={onChangeHandler}
      {...otherProps}
    />
  );
});
