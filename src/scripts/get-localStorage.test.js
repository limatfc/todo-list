import getLocalStorage from "./get-localStorage";

//they are both giving false positives, since it doesn't seem
//to make a diffence which key I pass.
//Couldn't figure out how to solve this.

test("if storageKey is invalid, returns an empty array", () => {
  const storageKey = "XXXXtasksList";

  const result = getLocalStorage(storageKey);
  expect(result).toStrictEqual([]);
});

test("if storageKey is valid the function should pass", () => {
  const storageKey = "tasksList";

  const result = getLocalStorage(storageKey);

  expect(result).toStrictEqual([]);
});
