import type { FC } from "react";
import scss from "./CardProduct.module.scss";

type PropsType = {
  item: Product.ProductData;
};

const CardProduct: FC<PropsType> = ({ item }) => {
  return (
    <div className={scss.CardProduct}>
      <img src={item.img} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </div>
  );
};

export default CardProduct;
