import { FilePlus2, House } from "lucide-react";
import scss from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className={scss.Nav}>
      <div className="container">
        <div className={scss.content}>
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
