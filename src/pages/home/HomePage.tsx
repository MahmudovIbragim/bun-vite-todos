import ProductsContainer from "../../widgets/products-container/ProductsContainer";
import scss from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          <ProductsContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
