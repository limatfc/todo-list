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
