import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskForm from "../components/AddTaskForm";

const mockContext = jest.fn();

jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");

  return {
    ...ActualReact,
    useContext: () => ({
      addTask: mockContext,
    }),
  };
});

test("The form renders on the screen", () => {
  render(<AddTaskForm toggleModal={() => {}} />);
  const titleElement = screen.queryByText(/add a new item/i);
  expect(titleElement).toBeInTheDocument();
});

test("Calls the context API if both inputs are valid", () => {
  const eventName = {
    target: { value: "Table" },
  };
  const eventPrice = {
    target: { value: "300" },
  };

  const allInputedDataArray = {
    name: "Table",
    price: "300",
    isDone: false,
  };

  render(<AddTaskForm toggleModal={() => {}} />);
  const inputNameElement = screen.queryByLabelText(/product name/i);
  const inputPriceElement = screen.queryByLabelText(/product price/i);
  const submitButtonElement = screen.queryByText(/add item/i);

  fireEvent.change(inputNameElement, eventName);
  fireEvent.change(inputPriceElement, eventPrice);
  fireEvent.click(submitButtonElement);

  expect(mockContext).toBeCalledWith(
    expect.objectContaining(allInputedDataArray)
  );
});

test("Context API is not called if both inputs are invalid", () => {
  const eventName = {
    target: { value: "" },
  };
  const eventPrice = {
    target: { value: "-1" },
  };

  render(<AddTaskForm toggleModal={() => {}} />);
  const inputNameElement = screen.queryByLabelText(/product name/i);
  const inputPriceElement = screen.queryByLabelText(/product price/i);
  const submitButtonElement = screen.queryByText(/add item/i);

  fireEvent.change(inputNameElement, eventName);
  fireEvent.change(inputPriceElement, eventPrice);
  fireEvent.click(submitButtonElement);

  expect(mockContext).not.toBeCalled();
});

test("Context API is not called if name input is empty", () => {
  const eventName = {
    target: { value: "" },
  };
  const eventPrice = {
    target: { value: "300" },
  };

  render(<AddTaskForm toggleModal={() => {}} />);
  const inputNameElement = screen.queryByLabelText(/product name/i);
  const inputPriceElement = screen.queryByLabelText(/product price/i);
  const submitButtonElement = screen.queryByText(/add item/i);

  fireEvent.change(inputNameElement, eventName);
  fireEvent.change(inputPriceElement, eventPrice);
  fireEvent.click(submitButtonElement);

  expect(mockContext).not.toBeCalled();
});

test("Context API is not called if number input is negative", () => {
  const eventName = {
    target: { value: "Chair" },
  };
  const eventPrice = {
    target: { value: "-1" },
  };

  render(<AddTaskForm toggleModal={() => {}} />);
  const inputNameElement = screen.queryByLabelText(/product name/i);
  const inputPriceElement = screen.queryByLabelText(/product price/i);
  const submitButtonElement = screen.queryByText(/add item/i);

  fireEvent.change(inputNameElement, eventName);
  fireEvent.change(inputPriceElement, eventPrice);
  fireEvent.click(submitButtonElement);

  expect(mockContext).not.toBeCalled();
});

test("Context API is not called if number input is empty", () => {
  const eventName = {
    target: { value: "Chair" },
  };
  const eventPrice = {
    target: { value: "" },
  };

  render(<AddTaskForm toggleModal={() => {}} />);
  const inputNameElement = screen.queryByLabelText(/product name/i);
  const inputPriceElement = screen.queryByLabelText(/product price/i);
  const submitButtonElement = screen.queryByText(/add item/i);

  fireEvent.change(inputNameElement, eventName);
  fireEvent.change(inputPriceElement, eventPrice);
  fireEvent.click(submitButtonElement);

  expect(mockContext).not.toBeCalled();
});

test("Error message is not rendered if name input has a valid name onBlur", () => {
  render(<AddTaskForm toggleModal={() => {}} />);
  const inputNameElement = screen.queryByLabelText(/product name/i);
  fireEvent.change(inputNameElement, { target: { value: "Table" } });
  inputNameElement.blur();

  const errorMessage = screen.queryByText(/Name field must be completed/i);
  expect(errorMessage).not.toBeInTheDocument();
});

test("Error message is rendered if name input has an invalid name onBlur", () => {
  render(<AddTaskForm toggleModal={() => {}} />);
  const inputNameElement = screen.queryByLabelText(/product name/i);
  inputNameElement.focus();
  inputNameElement.blur();

  const errorMessage = screen.queryByText(/Name field must be completed/i);
  expect(errorMessage).toBeInTheDocument();
});

test("Error message is not rendered if price input has a valid price onBlur", () => {
  render(<AddTaskForm toggleModal={() => {}} />);
  const inputPriceElement = screen.queryByLabelText(/product price/i);
  fireEvent.change(inputPriceElement, { target: { value: "300" } });
  inputPriceElement.blur();

  const errorMessage = screen.queryByText(/Price must be greater than 0/i);
  expect(errorMessage).not.toBeInTheDocument();
});

test("Error message is rendered if price input has an invalid price onBlur", () => {
  render(<AddTaskForm toggleModal={() => {}} />);
  const inputPriceElement = screen.queryByLabelText(/product price/i);
  inputPriceElement.focus();
  inputPriceElement.blur();

  const errorMessage = screen.queryByText(/Price must be greater than 0/i);
  expect(errorMessage).toBeInTheDocument();
});
