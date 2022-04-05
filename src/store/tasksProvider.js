import { useEffect, useState } from "react";
import { TasksContext } from "./tasks-context";
import setLocalStorage from "../scripts/set-localStorage";
import getLocalStorage from "../scripts/get-localStorage";

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    task.id = tasks.length;
    setTasks((prevState) => [task, ...prevState]);
  }

  const storageKey = "tasksList";

  useEffect(() => {
    getLocalStorage(setTasks, storageKey);
  }, []);

  useEffect(() => {
    setLocalStorage(tasks, storageKey);
  }, [tasks]);

  function toggleIsDone(id) {
    const copyState = [...tasks];
    const findItem = copyState.find((item) => item.id === Number(id));
    findItem.isDone = !findItem.isDone;
    setTasks(copyState);
  }

  const tasksContext = {
    tasks,
    addTask,
    toggleIsDone,
  };

  return (
    <TasksContext.Provider value={tasksContext}>
      {children}
    </TasksContext.Provider>
  );
}
