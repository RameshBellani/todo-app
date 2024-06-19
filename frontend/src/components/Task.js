import React from 'react';
import axios from 'axios';
import './Task.css'

const Task = ({ task, refreshTasks }) => {
  const toggleComplete = async () => {
    await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
      completed: !task.completed,
    });
    refreshTasks();
  };

  const deleteTask = async () => {
    await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
    refreshTasks();
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
        <span className='taskitem'>{task.title}</span>
      </label>
      <button className='delete-button' onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
