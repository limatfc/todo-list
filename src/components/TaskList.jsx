import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  if (tasks.length === 0) return <small>No items found</small>;

  return (
    <div>
      {tasks.map((item) => (
        <TaskItem task={item} />
      ))}
    </div>
  );
}
