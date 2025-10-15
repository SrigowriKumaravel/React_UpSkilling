import React, { useContext, useState, useRef } from "react";
import { TaskContext } from "./TaskApp";

function TaskList(props) {
  const { state, dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  const addTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
      inputRef.current.focus();
    }
  };

  const removeTask = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL_TASK" });
  };
  return (
    <div>
      <h1>Add a Task</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        ref={inputRef}
        placeholder="Enter a new task"
      />
      <button className="btn-sm" onClick={addTask}>
        Add Task
      </button>
      <h1>Task List</h1>
      {state.map((task, index) => {
        return (
          <div
            key={index}
            style={{
              background: "darkblue",
              borderRadius: "1rem",
              color: "white",
              marginBottom: "0.6rem",
            }}
          >
            <span>{task.task}</span>
            <button
              className="btn-danger-sm"
              onClick={() => removeTask(task.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn-danger-sm" onClick={() => removeAll()}>
        Remove All
      </button>
    </div>
  );
}

export default TaskList;
