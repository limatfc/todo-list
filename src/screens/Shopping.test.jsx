import { render, screen, fireEvent } from "@testing-library/react";
import Shopping from "./Shopping";

test("renders the Shopping component on the screen", () => {
  render(<Shopping toggleModal={() => {}} />);
  const titleElement = screen.queryByText(/Your Shopping List/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders the Shopping Header component on the screen", () => {
  render(<Shopping toggleModal={() => {}} />);
  const titleElement = screen.queryByText(/Sort by:/i);
  expect(titleElement).toBeInTheDocument();
});

test("View completed items' button is present on first page rendering", () => {
  render(<Shopping toggleModal={() => {}} />);
  const viewCompleteItemsButton = screen.queryByText(/View completed items/i);
  expect(viewCompleteItemsButton).toBeInTheDocument();
});

test("Hide completed items' button is NOT present on first page rendering", () => {
  render(<Shopping toggleModal={() => {}} />);
  const hideCompleteItemsButton = screen.queryByText(/Hide completed items/i);
  expect(hideCompleteItemsButton).not.toBeInTheDocument();
});

test("Click on the 'view completed items'button leads to the rendering of the 'hide completed items'button", () => {
  render(<Shopping toggleModal={() => {}} />);
  const viewCompleteItemsButton = screen.queryByText(/View completed items/i);
  fireEvent.click(viewCompleteItemsButton);
  const hideCompleteItemsButton = screen.queryByText(/Hide completed items/i);

  expect(hideCompleteItemsButton).toBeInTheDocument();
});

test("Click on the 'Hide completed items' button leads to rendering of the 'View complete items' button", () => {
  render(<Shopping toggleModal={() => {}} />);
  const viewCompleteItemsButton = screen.queryByText(/View completed items/i);
  fireEvent.click(viewCompleteItemsButton);
  const hideCompleteItemsButton = screen.queryByText(/Hide completed items/i);
  fireEvent.click(hideCompleteItemsButton);

  expect(viewCompleteItemsButton).toBeInTheDocument();
});

test("Click on the 'View completed items' button leads to a second TaskItem component render", () => {
  render(<Shopping toggleModal={() => {}} />);
  const viewCompleteItemsButton = screen.queryByText(/View completed items/i);
  fireEvent.click(viewCompleteItemsButton);
  const textElement = screen.queryAllByText(/No items found/i);
  expect(textElement.length).toBe(2);
});
