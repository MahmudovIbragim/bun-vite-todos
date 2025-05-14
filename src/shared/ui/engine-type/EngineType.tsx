import { useState } from "react";
import scss from "./EngineType.module.scss";
import Input from "../input/Input";
import type { FieldValues, UseFormRegister } from "react-hook-form";
import { ChevronDown } from "lucide-react";

type PropsType = {
  register: UseFormRegister<FieldValues>;
};

const engineTypeData = [
  {
    id: 1,
    value: "Дизель",
  },
  {
    id: 2,
    value: "Бензин",
  },
  {
    id: 3,
    value: "Электро",
  },
];
const EngineType = ({ register }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (value: string) => {
    setValue(value);
    setIsOpen(false);
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 100);
  };

  return (
    <div className={scss.EngineType}>
      <Input
        placeholder="Тип двигателя"
        register={register}
        title="engineType"
        type="text"
        value={value}
        click={() => {
          setIsOpen(!isOpen);
        }}
      />
      <div className={`${isOpen ? scss.arrowUp : scss.icon}`}>
        <ChevronDown color="#000000" />
      </div>

      <div className={`${isOpen ? scss.drop : scss.hidden}`}>
        {engineTypeData.map((item) => (
          <div className={scss.options} key={item.id}>
            <p onClick={() => handleSelect(item.value)}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineType;
