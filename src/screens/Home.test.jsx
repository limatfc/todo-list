import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home on the screen", () => {
  render(<Home />);
  const titleElement = screen.getByText(/IKEA Shopping List/i);
  expect(titleElement).toBeInTheDocument();
});
