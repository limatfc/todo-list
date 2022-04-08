import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

test("if tasks list is empty, app shows Home screen", () => {
  render(<App />);
  const paragraphElement = screen.queryByText(
    /Here you will be able to create /i
  );
  expect(paragraphElement).toBeInTheDocument();
});

test("click on the Add Item buttons opens the modal", () => {
  render(<App />);
  const buttonElement = screen.queryByText(/Add Item/i);
  fireEvent.click(buttonElement);
  const formTitle = screen.queryByText(/Add a new item/i);
  expect(formTitle).toBeInTheDocument();
});

test("clicking on the Cancel button closes the modal", () => {
  render(<App />);
  const buttonElement = screen.queryByText(/Add Item/i);
  fireEvent.click(buttonElement);
  const cancelButton = screen.queryByText(/close/i);
  fireEvent.click(cancelButton);

  expect(cancelButton).not.toBeInTheDocument();
});

// test("inputing both valid fields creates an item on the Shopping screen", () => {
//   const correctName = "Elephant";
//   const correctPrice = "500";

//   render(<App />);

//   const homeButton = screen.queryByText(/add item/i);
//   fireEvent.click(homeButton);

//   const inputName = screen.queryByLabelText(/product name/i);
//   const inputPrice = screen.queryByLabelText(/product price/i);
//   const modalbutton = screen.queryByText("button", {
//     name: /add item/i,
//     id: /modal/i,
//   });

//   fireEvent.change(inputName, { target: { value: correctName } });
//   fireEvent.change(inputPrice, { target: { value: correctPrice } });

//   fireEvent.click(modalbutton);

//   const newTask = screen.queryByText(/Elephant, 500:-/i);
//   expect(newTask).toBeInTheDocument();
// });
