import { useForm, type FieldValues } from "react-hook-form";
import scss from "./CreateProduct.module.scss";
import FormProduct from "../../widgets/form-product/FormProduct";
import { useCreateProductMutation } from "../../entities/api";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();

  const [createProduct] = useCreateProductMutation();

  const handleCreateProduct = async (data: FieldValues) => {
    const newData = {
      ...data,
      isFavorite: false,
      img: data.img,
      name: data.name,
      brand: data.brand,
      power: data.power,
      price: data.price,
      mileage: data.mileage,
      engineSize: data.engineSize,
      engineType: data.engineType,
      yearOfIssue: data.yearOfIssue,
    };

    if (newData) {
      console.log(newData);

      await createProduct(newData);
      reset();
    }
  };

  return (
    <div className={scss.CreateProduct}>
      <div className="container">
        <div className={scss.content}>
          <FormProduct
            FormSubmit={handleSubmit}
            register={register}
            handleCreate={handleCreateProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
