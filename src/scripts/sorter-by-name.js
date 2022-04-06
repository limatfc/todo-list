export default function sorterByName(tasks) {
  const copyTasks = [...tasks];
  const sortedName = copyTasks.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedName;
}
