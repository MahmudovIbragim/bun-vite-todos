import type { FC, ReactNode } from "react";
import scss from "./Button.module.scss";
type PropsTypes = {
  children: ReactNode;
  click?: () => void;
  type?: "button" | "submit" | "reset";
  submit?: () => void;
};
const Button: FC<PropsTypes> = ({ children, click, type,submit }) => {
  return (
    <button className={scss.Button} onClick={click} type={type} onSubmit={submit}>
      {children}
    </button>
  );
};

export default Button;
