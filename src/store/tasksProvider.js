import { useEffect, useState } from "react";
import { TasksContext } from "./tasks-context";
import setLocalStorage from "../scripts/set-localStorage";
import getLocalStorage from "../scripts/get-localStorage";
import sorterByName from "../scripts/sorter-by-name";
import sorterByPrice from "../scripts/sorter-by-price";
import togglerIsDone from "../scripts/toggler-isDone";

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
    const result = togglerIsDone(tasks, id);
    setTasks(result);
  }

  function sortByName() {
    const result = sorterByName(tasks);
    setTasks(result);
  }

  function sortByPrice() {
    const result = sorterByPrice(tasks);
    setTasks(result);
  }

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, toggleIsDone, sortByName, sortByPrice }}
    >
      {children}
    </TasksContext.Provider>
  );
}
