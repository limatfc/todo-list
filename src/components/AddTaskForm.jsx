import InputField from "./InputField";
import inputFieldData from "../data/input-field.json";

export default function AddTaskForm({ toggleModal }) {
  const validateName = (value) => value.trim().length !== 0;
  const validatePrice = (value) => Number(value) > 1;

  return (
    <div>
      <h2>Add a new item</h2>
      <InputField
        information={inputFieldData.name}
        validationPremisse={validateName}
      />
      <InputField
        information={inputFieldData.price}
        validationPremisse={validatePrice}
      />
      <button>Add New Item</button>
      <button onClick={toggleModal}>Close</button>
    </div>
  );
}
