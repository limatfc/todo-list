import TaskItem from "./TaskItem";
import "../styles/components/TaskList.css";

export default function TaskList({ tasks }) {
  if (tasks.length === 0)
    return <p className="error-message">No items found</p>;

  return (
    <div className="list-wrapper">
      {tasks.map((item) => (
        <TaskItem task={item} />
      ))}
    </div>
  );
}
