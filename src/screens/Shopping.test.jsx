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

// test("renders 'No items found' on the screen if TaskItem receives an empty array", () => {
//   jest.mock("react", () => {
//     const ActualReact = jest.requireActual("react");

//     return {
//       ...ActualReact,
//       useContext: () => ({
//         tasks: [],
//       }),
//     };
//   });
//   render(<Shopping toggleModal={() => {}} />);
//   const smallElement = screen.queryByText(/No items found/i);
//   expect(smallElement).toBeInTheDocument();
// });

// test("renders TaskItem on the screen if TaskItem receives array with content", () => {
//   //   jest.mock("react", () => {
//   //     const ActualReact = jest.requireActual("react");

//   //     return {
//   //       ...ActualReact,
//   //       useContext: () => ({
//   //         tasks: [{ name: "Chair", price: 300, isDone: false, id: 1 }],
//   //       }),
//   //     };
//   //   });
//   render(<Shopping toggleModal={() => {}} />);

//   const smallElement = screen.queryByText(/No items found/i);
//   expect(smallElement).not.toBeInTheDocument();
// });
