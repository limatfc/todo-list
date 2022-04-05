import logo from "../assets/images/logo.png";
import TaskItem from "../components/TaskItem";
import openedEyeIcon from "../assets/icons/eye-open.png";
import shutEyeIcon from "../assets/icons/eye-shut.png";
import useTasksProvider from "../store/use-tasks-provider";
import { useState } from "react";
import ShoppingHeader from "../components/ShoppingHeader";
import contentToggler from "../scripts/content-toggler";
import errorData from "../data/shopping.json";

export default function Shopping({ toggleModal }) {
  const [showDoneItems, setShowDoneItems] = useState(false);
  const tasksContext = useTasksProvider();

  const notDoneTasksList = tasksContext.tasks
    .filter((item) => !item.isDone)
    .map((item) => <TaskItem task={item} key={item.id} />);

  const doneTasksList = tasksContext.tasks
    .filter((item) => item.isDone)
    .map((item) => <TaskItem key={item.id} task={item} />);

  const notDoneTasksRender = contentToggler(notDoneTasksList, errorData.error);
  const doneTasksRender = contentToggler(doneTasksList, errorData.error);

  function toggleDoneItems() {
    setShowDoneItems(!showDoneItems);
  }

  const iconSource = showDoneItems ? shutEyeIcon : openedEyeIcon;
  const buttonLabel = showDoneItems ? "Hide" : "View";

  return (
    <div>
      <img
        src={logo}
        alt="The word IKEA written in blue inside a yellow circle, inside a blue rectangle"
      />
      <h1>Your Shopping List</h1>
      <ShoppingHeader />
      <div>{notDoneTasksRender}</div>
      <button onClick={toggleModal}>Add New Item</button>
      <button onClick={toggleDoneItems}>
        <img src={iconSource} alt="an open eye" />
        {buttonLabel} Completed Items
      </button>
      {showDoneItems && <div>{doneTasksRender}</div>}
    </div>
  );
}
