import type { FC } from "react";
import scss from "./Input.module.scss";
import type { FieldValues, UseFormRegister } from "react-hook-form";
type PropsTypes = {
  value?: string;
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  title: string;
  click?: () => void;
};
const Input: FC<PropsTypes> = ({
  value,
  click,
  type,
  placeholder,
  register,
  title,
}) => {
  return (
    <input
      className={scss.Input}
      value={value}
      placeholder={placeholder}
      type={type}
      onClick={click}
      {...register(title, { required: true })}
    />
  );
};

export default Input;
