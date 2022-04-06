import { render, screen } from "@testing-library/react";
import Modal from "../components/Modal";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

jest.mock("./AddTaskForm", () => {
  return {
    __esModule: true,
    A: true,
    default: () => {
      return <div>Add form component test</div>;
    },
  };
});

test("the Modal renders if it receives true as a prop", () => {
  const positiveModalState = [true, () => {}];
  render(<Modal modalState={positiveModalState} />);
  const AddTaskForm = screen.queryByText("Add form component test");
  expect(AddTaskForm).toBeInTheDocument();
});

test("the Modal doesn't render if it receives false as a prop", () => {
  const positiveModalState = [false, () => {}];
  render(<Modal modalState={positiveModalState} />);
  const AddTaskForm = screen.queryByText("Add form component test");
  expect(AddTaskForm).not.toBeInTheDocument();
});
