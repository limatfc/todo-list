export default function togglerIsDone(tasks, id) {
  const copyState = [...tasks];
  const findItem = copyState.find((item) => item.id === Number(id));
  findItem.isDone = !findItem.isDone;

  return copyState;
}
