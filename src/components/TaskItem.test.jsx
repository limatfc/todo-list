import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "./TaskItem";

const mockContext = jest.fn();

jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");

  return {
    ...ActualReact,
    useContext: () => ({
      toggleIsDone: mockContext,
    }),
  };
});

test("renders an item on the screen", () => {
  const task = { id: 1, name: "Chair", price: "300", isDone: false };
  render(<TaskItem task={task} />);
  const TaskOnScreen = screen.queryByLabelText("Chair, 300:-");
  expect(TaskOnScreen).toBeInTheDocument();
});

test("an onChange event on the item calls the context API", () => {
  const task = { id: 1, name: "Chair", price: "300", isDone: false };
  render(<TaskItem task={task} />);
  const TaskOnScreen = screen.queryByLabelText("Chair, 300:-");
  fireEvent.click(TaskOnScreen);
  expect(mockContext).toBeCalled();
});
