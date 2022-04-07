import Home from "./screens/Home";
import Modal from "./components/Modal";
import "./styles/globalStyles/App.css";
import { useState } from "react";
import useTasksProvider from "./store/use-tasks-provider";
import Shopping from "./screens/Shopping";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const tasksContext = useTasksProvider();

  const tasksList = tasksContext.tasks;

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      {tasksList.length === 0 && <Home toggleModal={toggleModal} />}
      {tasksList.length !== 0 && <Shopping toggleModal={toggleModal} />}
      {showModal && <Modal modalState={[showModal, toggleModal]} />}
    </div>
  );
}
