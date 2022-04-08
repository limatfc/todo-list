import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

test("renders TaskItem on the screen if TaskItem receives array with content", () => {
  const tasks = [{ name: "Chair", price: 300, id: 1, isDone: false }];
  render(<TaskList tasks={tasks} />);
  const TaskOnScreen = screen.queryByLabelText("Chair, 300:-");
  expect(TaskOnScreen).toBeInTheDocument();
});

test("renders 'No items found' on the screen if TaskItem receives an empty array", () => {
  const tasks = [];
  render(<TaskList tasks={tasks} />);
  const TaskOnScreen = screen.queryByText(/no items found/i);
  expect(TaskOnScreen).toBeInTheDocument();
});
