import Home from "./screens/Home";
import Modal from "./components/Modal";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <Home toggleModal={toggleModal} />
      {showModal && <Modal modalState={[showModal, toggleModal]} />}
    </div>
  );
}
