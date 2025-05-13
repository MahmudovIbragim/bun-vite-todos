import { FilePlus2, House } from "lucide-react";
import scss from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";

type PropsType = {
  isScroll: boolean;
};
const Nav: FC<PropsType> = ({ isScroll }) => {
  const navigate = useNavigate();

  return (
    <div className={`${scss.Nav} ${isScroll ? scss.scroll : ""}`}>
      <div className="container">
        <div className={`${scss.content} `}>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <House />
          </button>
          <button
            onClick={() => {
              navigate("/create-product");
            }}
          >
            <p>Create</p>
            <FilePlus2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
