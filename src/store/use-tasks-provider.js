import { useContext } from "react";
import { TasksContext } from "./tasks-context";

export default function useTasksProvider() {
  const context = useContext(TasksContext);

  return context;
}
