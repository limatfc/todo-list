import { useState } from "react";

export default function InputField({ information, state, validationFunction }) {
  const { label, placeholder, error, type } = information;
  const [getter, setter] = state;

  const [errorMessage, setErrorMessage] = useState("");

  function onChangeHandler(event) {
    setter(event.target.value);
  }

  function onBlurHandler() {
    const validatedInputedValue = validationFunction(getter, error);
    setter(validatedInputedValue.trimmedValue);
    setErrorMessage(validatedInputedValue.errorMessage);
  }

  return (
    <label>
      {label}
      <input
        type={type}
        value={getter}
        placeholder={placeholder}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <small>{errorMessage}</small>
    </label>
  );
}
