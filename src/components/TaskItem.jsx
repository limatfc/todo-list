import useTasksProvider from "../store/use-tasks-provider";
import "../styles/components/TaskItem.css";

export default function TaskItem({ task }) {
  const tasksContext = useTasksProvider();

  const classname = task.isDone ? "done" : "";

  function onChangeHandler(event) {
    tasksContext.toggleIsDone(event.target.value);
  }

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
