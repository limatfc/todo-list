export default function sorterByPrice(tasks) {
  const copyTasks = [...tasks];
  const sortedPrice = copyTasks.sort((a, b) => {
    return a.price - b.price;
  });
  return sortedPrice;
}
