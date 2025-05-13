import { useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../entities/api";
import CardProduct from "../../entities/ui/CardProduct";
import scss from "./ProductsContainer.module.scss";
const ProductsContainer = () => {
  const { data, isSuccess } = useGetProductQuery();
  const navigate = useNavigate()
  return (
    <div className={scss.ProductsContainer}>
      <div className="container">
        <div className={scss.content}>
          {isSuccess &&
            data.data.map((item) => <CardProduct navigate={navigate} item={item} key={item._id} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
