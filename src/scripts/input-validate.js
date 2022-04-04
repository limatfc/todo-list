export default function inputValidate(inputedValue, validationPremisse, error) {
  const validationInputedValue = validationPremisse(inputedValue);
  const validatedValue = !validationInputedValue ? inputedValue : "";
  const errorMessage = !validationInputedValue ? error : "";
  return { validationInputedValue, validatedValue, errorMessage };
}
