import { useState } from "react";
import useTasksProvider from "../store/use-tasks-provider";
import InputField from "./InputField";
import inputFieldData from "../data/input-field.json";
import validateName from "../scripts/validate-name";
import validatePrice from "../scripts/validate-price";
import "../styles/components/AddTaskForm.css";

export default function AddTaskForm({ toggleModal }) {
  const [inputedName, setInputedName] = useState("");
  const [inputedPrice, setInputedPrice] = useState("");
  const tasksContext = useTasksProvider();

  function onSubmitHandler(event) {
    event.preventDefault();

    if (inputedName === "" || inputedPrice < 0 || inputedPrice === "")
      return null;

    tasksContext.addTask({
      name: inputedName,
      price: inputedPrice,
      isDone: false,
    });

    setInputedName("");
    setInputedPrice("");
    toggleModal();
  }

  return (
    <div>
      <div onClick={toggleModal} className="backdrop"></div>
      <form className="overlayer" onSubmit={onSubmitHandler}>
        <h2>Add a new item</h2>
        <InputField
          information={inputFieldData.name}
          state={[inputedName, setInputedName]}
          validationFunction={validateName}
        />
        <InputField
          information={inputFieldData.price}
          state={[inputedPrice, setInputedPrice]}
          validationFunction={validatePrice}
        />
        <button className="label primary" type="submit">
          Add Item
        </button>
        <button className="label secundary" onClick={toggleModal} type="button">
          Close
        </button>
      </form>
    </div>
  );
}
