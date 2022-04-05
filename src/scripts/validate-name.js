export default function validateName(inputedValue, error) {
  const trimmedValue = inputedValue.trim();
  const validation = trimmedValue !== "";
  const errorMessage = !validation ? error : "";
  return { trimmedValue, errorMessage };
}
