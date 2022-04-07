import useTasksProvider from "../store/use-tasks-provider";
import "../styles/components/TaskItem.css";

export default function TaskItem({ task }) {
  const tasksContext = useTasksProvider();

  function onChangeHandler(event) {
    tasksContext.toggleIsDone(event.target.value);
  }

  const classname = task.isDone ? "done" : "";

  return (
    <label className={`item-wrapper ${classname} text`}>
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
