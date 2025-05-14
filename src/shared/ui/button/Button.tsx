import type { FC, ReactNode } from "react";
import scss from "./Button.module.scss";
type PropsTypes = {
  children: ReactNode;
  click: () => void;
};
const Button: FC<PropsTypes> = ({ children, click }) => {
  return (
    <button className={scss.Button} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
