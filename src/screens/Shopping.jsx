import { useState } from "react";
import useTasksProvider from "../store/use-tasks-provider";
import logo from "../assets/images/logo.png";
import openedEyeIcon from "../assets/icons/eye-open.png";
import shutEyeIcon from "../assets/icons/eye-shut.png";
import TaskList from "../components/TaskList";
import ShoppingHeader from "../components/ShoppingHeader";
import "../styles/screens/Shopping.css";

export default function Shopping({ toggleModal }) {
  const [showDoneItems, setShowDoneItems] = useState(false);
  const tasksContext = useTasksProvider();

  const notDoneTasksList = tasksContext.tasks.filter((item) => !item.isDone);

  const doneTasksList = tasksContext.tasks.filter((item) => item.isDone);

  function toggleDoneItems() {
    setShowDoneItems(!showDoneItems);
  }

  const iconSource = showDoneItems ? shutEyeIcon : openedEyeIcon;
  const buttonLabel = showDoneItems ? "Hide" : "View";

  return (
    <div className="shopping-wrapper">
      <img
        className="logo"
        src={logo}
        alt="The word IKEA written in blue inside a yellow circle, inside a blue rectangle"
      />
      <h1>Your Shopping List</h1>
      <ShoppingHeader />
      <div>{<TaskList tasks={notDoneTasksList} />}</div>
      <button onClick={toggleModal}>Add Item</button>
      <button onClick={toggleDoneItems}>
        <img src={iconSource} alt="an open eye" />
        {buttonLabel} Completed Items
      </button>
      {showDoneItems && <div>{<TaskList tasks={doneTasksList} />}</div>}
    </div>
  );
}
