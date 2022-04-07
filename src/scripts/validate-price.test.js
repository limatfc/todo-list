import validatePrice from "./validate-price";

test("fails if value is empty", () => {
  const inputedValue = "";
  const error = "Price must be greater than 0";

  const result = validatePrice(inputedValue, error);

  expect(result.validValue).toBe("");
  expect(result.errorMessage).toBe(error);
});

test("fails if value is negative", () => {
  const inputedValue = "-4";
  const error = "Price must be greater than 0";

  const result = validatePrice(inputedValue, error);

  expect(result.validValue).toBe("");
  expect(result.errorMessage).toBe(error);
});

test("fails if value is 0", () => {
  const inputedValue = "0";
  const error = "Price must be greater than 0";

  const result = validatePrice(inputedValue, error);

  expect(result.validValue).toBe("");
  expect(result.errorMessage).toBe(error);
});

test("passes if value is positive", () => {
  const inputedValue = "20";
  const error = "Price must be greater than 0";

  const result = validatePrice(inputedValue, error);

  expect(result.validValue).toBe("20");
  expect(result.errorMessage).toBe("");
});
