import { useEffect, useState } from "react";
import { useGetProductQuery } from "../../entities/api";
import scss from "./HomePage.module.scss";

const HomePage = () => {
  const { data, isSuccess } = useGetProductQuery();
  const [getData, setData] = useState<null | Product.ProductData>(null);
  useEffect(() => {
    if (isSuccess) {
      setData(data?.data);
    }
  }, [data, isSuccess]);

  return (
    <div className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          <h1>HomePage</h1>
          <div className={scss.test}>
            {getData !== null
              ? getData.map((item) => (
                  <div className={scss.product} key={item._id}>
                    <img src={item.img} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
