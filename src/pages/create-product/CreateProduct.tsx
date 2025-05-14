import { useForm, type FieldValues } from "react-hook-form";
import scss from "./CreateProduct.module.scss";
import FormProduct from "../../widgets/form-product/FormProduct";

const CreateProduct = () => {
  const { register, formState, reset, handleSubmit } = useForm();

  const handleCreateProduct = (data: FieldValues) => {
    console.log(data);
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
