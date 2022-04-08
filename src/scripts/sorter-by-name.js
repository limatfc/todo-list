export default function sorterByName(tasks) {
  const copyTasks = [...tasks];
  const findKey = copyTasks.find((item) => item.name);
  if (!findKey) return null;
  const sortedName = copyTasks.sort((a, b) => {
    let firstName = a.name.toUpperCase();
    let secondName = b.name.toUpperCase();
    if (firstName < secondName) {
      return -1;
    } else if (firstName > secondName) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedName;
}
