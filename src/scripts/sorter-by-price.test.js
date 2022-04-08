import sorterByPrice from "../scripts/sorter-by-price";

test("returns a list of objets containing prices in crescent order", () => {
  const tasks = [
    { name: "Zebra", price: 400 },
    { name: "Mug", price: 300 },
    { name: "Apple statue", price: 500 },
  ];

  const result = sorterByPrice(tasks);

  expect(result).toStrictEqual([
    { name: "Mug", price: 300 },
    { name: "Zebra", price: 400 },
    { name: "Apple statue", price: 500 },
  ]);
});

test("returns null if array doesn't have a 'name' key", () => {
  const tasks = [{ name: "Zebra" }, { name: "Mug" }, { name: "Apple statue" }];
  const result = sorterByPrice(tasks);
  expect(result).toBeNull();
});
