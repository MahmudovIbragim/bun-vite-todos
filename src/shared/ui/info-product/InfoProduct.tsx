import scss from "./InfoProduct.module.scss";

const InfoProduct = ({ data }: { data?: Product.ProductData }) => {
  return (
    <div className={scss.InfoProduct}>
      <ul>
        <li>
          <b>Пробег</b>
          <p>{data?.mileage}</p>
        </li>
        <li>
          <b>Год выпуска</b>
          <p>{data?.yearOfIssue}</p>
        </li>
        <li>
          <b>Тип двигателя</b>
          <p>{data?.engineType}</p>
        </li>
        <li>
          <b>Объем двигателя</b>
          <p>{data?.engineSize} л</p>
        </li>
        <li>
          <b>Мощность</b>
          <p>{data?.power} л.с</p>
        </li>
      </ul>
    </div>
  );
};

export default InfoProduct;
