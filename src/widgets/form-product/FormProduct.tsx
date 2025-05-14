import type {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import Input from "../../shared/ui/input/Input";
import scss from "./FormProduct.module.scss";
import type { FC } from "react";
import EngineType from "../../shared/ui/engine-type/EngineType";

type TypeProps = {
  register: UseFormRegister<FieldValues>;
  handleCreate: (data: FieldValues) => void;
  FormSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
};

const FormProduct: FC<TypeProps> = ({ register, handleCreate, FormSubmit }) => {
  return (
    <form className={scss.FormProduct} onSubmit={FormSubmit(handleCreate)}>
      <div className={scss.content}>
        <div className={scss.left_content}>
          <label>
            <b>Марка авто</b>
            <Input
              placeholder="Введите название"
              type="text"
              register={register}
              title="brand"
            />
          </label>
          <label>
            <b>Ссылка на картинку</b>
            <Input
              placeholder="Ссылка на картинку"
              type="text"
              register={register}
              title="img"
            />
          </label>
        </div>
        <div className={scss.right_content}>
          <div className={scss.info_title}>
            <label>
              <b>Модель авто </b>
              <Input
                placeholder="Модель авто"
                type="text"
                register={register}
                title="name"
              />
            </label>
            <label>
              <b>Цена</b>
              <Input
                placeholder="Цена"
                type="number"
                register={register}
                title="price"
              />
            </label>
          </div>
          <div className={scss.more_info}>
            <label>
              <b>Пробег</b>
              <Input
                placeholder="Пробег"
                type="number"
                register={register}
                title="mileage"
              />
            </label>
            <label>
              <b>Год выпуска</b>
              <Input
                placeholder="Год выпуска"
                type="number"
                register={register}
                title="yearOfIssue"
              />
            </label>
            <label>
              <b>Тип двигателя</b>
              <EngineType register={register} />
              {/* <Input
                placeholder="Тип двигателя"
                type="text"
                register={register}
                title="engineType"
              /> */}
            </label>
            <label>
              <b>Объем двигателя</b>
              <Input
                placeholder="Объем двигателя"
                type="number"
                register={register}
                title="engineSize"
              />
            </label>
            <label>
              <b>Мощность</b>
              <Input
                placeholder="Мощность"
                type="number"
                register={register}
                title="power"
              />
            </label>
          </div>
        </div>
      </div>
      <div className={scss.btn}>
        <button onSubmit={FormSubmit(handleCreate)}>create</button>
      </div>
    </form>
  );
};

export default FormProduct;
