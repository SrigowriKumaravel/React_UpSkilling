import React, { createContext, useReducer } from "react";
import { taskReducer } from "./taskReducer.jsx";
import TaskList from "./TaskList";

export const TaskContext = createContext();

const oldTask = [
  { id: 1, task: "Learning" },
  { id: 2, task: "Working" },
];

function TaskApp(props) {
  const [state, dispatch] = useReducer(taskReducer, oldTask);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Task Management App</h1>
        <br />
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
}

export default TaskApp;
