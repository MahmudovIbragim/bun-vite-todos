import scss from "./Header.module.scss";
const Header = () => {
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <img
            src="https://jetcar24.ru/wp-content/uploads/2022/11/logo.svg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
