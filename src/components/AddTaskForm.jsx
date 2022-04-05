import InputField from "./InputField";
import inputFieldData from "../data/input-field.json";
import { useState } from "react";
import validateName from "../scripts/validate-name";
import validatePrice from "../scripts/validate-price";
import useTasksProvider from "../store/use-tasks-provider";

export default function AddTaskForm({ toggleModal }) {
  const [inputedName, setInputedName] = useState("");
  const [inputedPrice, setInputedPrice] = useState("");
  const tasksContext = useTasksProvider();

  function submitHandler(event) {
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
    <form onSubmit={submitHandler}>
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
      <button type="submit">Add New Item</button>
      <button onClick={toggleModal} type="button">
        Close
      </button>
    </form>
  );
}
