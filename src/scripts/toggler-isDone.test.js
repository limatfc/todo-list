import togglerIsDone from "./toggler-isDone";

test("returns an array of object with the isDone property altered", () => {
  const tasks = [{ name: "Chair", price: 300, id: 3, isDone: false }];
  const id = 3;

  const result = togglerIsDone(tasks, id);

  expect(result).toStrictEqual([
    { name: "Chair", price: 300, id: 3, isDone: true },
  ]);
});

test("fails if the param id does not match the property id an array of object with the isDone property altered", () => {
  const tasks = [{ name: "Chair", price: 300, id: 2, isDone: false }];
  const id = 3;

  const result = togglerIsDone(tasks, id);

  expect(result).toBe(null);
});
