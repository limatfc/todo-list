export default function sorterByPrice(tasks) {
  const copyTasks = [...tasks];
  const findKey = copyTasks.find((item) => item.price);
  if (!findKey) return null;
  const sortedPrice = copyTasks.sort((a, b) => {
    return a.price - b.price;
  });
  return sortedPrice;
}
