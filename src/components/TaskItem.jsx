import useTasksProvider from "../store/use-tasks-provider";

export default function TaskItem({ task }) {
  const tasksContext = useTasksProvider();

  function onChangeHandler(event) {
    tasksContext.toggleIsDone(event.target.value);
  }
  return (
    <label>
      <input
        type="checkbox"
        value={task.id}
        checked={task.isDone}
        onChange={onChangeHandler}
      />
      {task.name}, {task.price}:-
    </label>
  );
}
