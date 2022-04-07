export default function validatePrice(inputedValue, error) {
  const trimmedValue = inputedValue.trim();
  const validation = trimmedValue !== "" && Number(trimmedValue) > 0;
  const validValue = !validation ? "" : trimmedValue;
  const errorMessage = !validation ? error : "";
  return { validValue, errorMessage };
}
