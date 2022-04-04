import { useState } from "react";
import inputValidate from "../scripts/input-validate";

export default function InputField({ information, validationPremisse }) {
  const { label, placeholder, error } = information;

  function onChangeHandler(event) {
    const validatedInputedValue = inputValidate(
      event.target.value,
      validationPremisse,
      error
    );
  }

  function onBlurHandler() {}

  return (
    <label>
      {label}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      <small>{}</small>
    </label>
  );
}
