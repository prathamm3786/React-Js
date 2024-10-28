import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"


const Add = () => {
  const [name, setName] = useState('');
  const [todolist, setTodoList] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const ViewTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(ViewTasks);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !todolist) {
      toast.error("All fields are required");
      return;
    }

    const newTask = {
      id: Math.floor(Math.random()* 10000),
      name,
      description: todolist,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    toast.success("Task added successfully!");
    setName('');
    setTodoList('');
  };

  const handleComplete = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    toast.info("Task deleted");
  };

  return (
    <div className="todo-app">
     <div className="b-color px-2 pb-2 mb-2"> <h2 className="text-center mt-5">My Todos</h2>
      <div className="input-container">
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Description"
          value={todolist}
          onChange={(e) => setTodoList(e.target.value)}
          className="form-control ms-2"
        />
        <button onClick={handleSubmit} className="btn btn-warning ms-2 submit-button">Add Todo</button>
      </div></div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <div>
              <span className="task-name text-warning ">{task.name}</span>
              <p className="task-desc">{task.description}</p>
            </div>
            <div className="task-buttons">
              <button
                onClick={() => handleComplete(task.id)}
                className={"btn btn-complete rounded-pill border-success border-2 ms-1"}
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="btn btn-delete rounded-pill border-danger border-2 ms-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Add;
