import ReactDOM from "react-dom";
import AddTaskForm from "./AddTaskForm";

export default function Modal({ modalState }) {
  const [showModal, toggleModal] = modalState;

  if (!showModal) return null;

  return (
    <div>
      {ReactDOM.createPortal(
        <AddTaskForm toggleModal={toggleModal} />,
        document.getElementById("modal-root")
      )}
      ;
    </div>
  );
}
