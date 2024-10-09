import React, { useState, useEffect } from "react";
import "./crud.css";

function LocalboxMiner() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddOrUpdateTask = (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription) {
      alert("All fields are required");
      return;
    }

    const newTask = {
      id: editTaskId ? editTaskId : Math.floor(Math.random() * 10000),
      name: taskName,
      description: taskDescription,
      date: new Date().toISOString().split("T")[0], 
    };

    if (editTaskId) {
      setTasks(tasks.map((task) => (task.id === editTaskId ? newTask : task)));
      setEditTaskId(null);
    } else {

      setTasks([...tasks, newTask]);
    }

    setTaskName("");
    setTaskDescription("");
  };

  const handleEditTask = (task) => {
    setTaskName(task.name);
    setTaskDescription(task.description);
    setEditTaskId(task.id);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className="todo-container">
        <h2 className="todo-title">Todo App</h2>

        <form className="add-task-form" onSubmit={handleAddOrUpdateTask}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Add New Task"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            <button type="submit" className="add-btn">
              {editTaskId ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>

        <h3 className="tasks-title" align="center">Tasks</h3>
        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h4>{task.name}</h4>
              <p>{task.date}</p>
              <p>{task.description}</p>
              <div className="task-actions">
                <button onClick={() => handleEditTask(task)}>
                  <i className="fa fa-pencil"></i>
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocalboxMiner;