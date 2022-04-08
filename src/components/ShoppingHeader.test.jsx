import ShoppingHeader from "./ShoppingHeader";
import { render, screen, fireEvent } from "@testing-library/react";

const mockContext = jest.fn();
jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");

  return {
    ...ActualReact,
    useContext: () => ({
      sortByName: mockContext,
      sortByPrice: mockContext,
    }),
  };
});

test("onClick event on the 'name' button calls the context API", () => {
  render(<ShoppingHeader />);
  const buttonElement = screen.queryByText(/name/i);
  fireEvent.click(buttonElement);
  expect(mockContext).toBeCalled();
});

test("onClick event on the 'price' button calls the context API", () => {
  render(<ShoppingHeader />);
  const buttonElement = screen.queryByText(/price/i);
  fireEvent.click(buttonElement);
  expect(mockContext).toBeCalled();
});
