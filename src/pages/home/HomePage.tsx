import scss from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          <h1>HomePage</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
