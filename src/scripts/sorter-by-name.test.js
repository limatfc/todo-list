import sorterByName from "./sorter-by-name";

test("returns a list of objets containing names in alphabetical order", () => {
  const tasks = [
    { name: "Zebra", price: 400 },
    { name: "Mug", price: 300 },
    { name: "Apple statue", price: 500 },
  ];

  const result = sorterByName(tasks);

  expect(result).toStrictEqual([
    { name: "Apple statue", price: 500 },
    { name: "Mug", price: 300 },
    { name: "Zebra", price: 400 },
  ]);
});

test("returns null if array doesn't have a 'name' key", () => {
  const tasks = [{ price: 400 }, { price: 300 }, { price: 500 }];
  const result = sorterByName(tasks);
  expect(result).toBeNull();
});
