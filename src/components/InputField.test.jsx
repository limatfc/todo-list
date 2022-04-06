import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../components/InputField";

test("onChange event on the input field generates an event object", () => {
  const information = {
    label: "product name",
    placeholder: "chair",
    error: "name must be completed",
    type: "text",
  };

  render(
    <InputField
      information={information}
      state={["", () => {}]}
      validationFunction={() => {}}
    />
  );

  const event = {
    target: { value: "the-name" },
  };
  const inputName = screen.queryByLabelText(/product name/i);
  fireEvent.change(inputName, event);
  expect(event.target.value).toBe("the-name");
});
