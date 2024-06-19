import React, { useState } from 'react';
import axios from 'axios';
import './AddTask.css';

const AddTask = ({ refreshTasks }) => {
  const [task, setTask] = useState('');

  const addTask = async () => {
    if (task) {
      try {
        await axios.post('http://localhost:5000/api/tasks', { title: task });
        setTask('');
        if (typeof refreshTasks === 'function') {
          refreshTasks(); // Update the task list dynamically
        }
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
        className="task-input"
      />
      <button onClick={addTask} className="add-button">Add Task</button>
    </div>
  );
};

export default AddTask;
