import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home on the screen", () => {
  render(<Home />);
  const titleElement = screen.queryByText(/Here you will be able to create/i);
  expect(titleElement).toBeInTheDocument();
});
