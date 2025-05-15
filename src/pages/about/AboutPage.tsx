import { useNavigate, useParams } from "react-router-dom";
import scss from "./AboutPage.module.scss";
import {
  useDeleteProductMutation,
  useGetProductByIdQuery,
} from "../../entities/api";
import InfoProduct from "../../shared/ui/info-product/InfoProduct";
import Button from "../../shared/ui/button/Button";
const AboutPage = () => {
  const params = useParams();
  const paramsId = Number(params.id);
  const navigate = useNavigate();

  const { data } = useGetProductByIdQuery(paramsId);
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async () => {
    await deleteProduct(paramsId);
    navigate("/");
  };

  return (
    <div className={scss.AboutPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.image}>
            <img src={data?.img} alt="image" />
          </div>
          <div className={scss.info}>
            <div className={scss.title_product}>
              <h2>{data?.name}</h2>
              <p>{data?.price}</p>
            </div>
            <div className={scss.more_info_product}>
              <InfoProduct data={data} />
            </div>
            <div className={scss.btns}>
              <Button
                click={() => {
                  handleDeleteProduct();
                }}
              >
                Удалить
              </Button>
              <Button click={() => {}}>Редактировать</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
