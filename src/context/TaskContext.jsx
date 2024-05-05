import { createContext, useState, useEffect } from "react";
import data from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(title, description) {
    setTask([
      ...tasks,
      {
        title,
        id: tasks.length + 1,
        description,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTask(tasks.filter((t) => t.id != taskID));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
