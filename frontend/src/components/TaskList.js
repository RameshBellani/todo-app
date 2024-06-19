import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';
import jsPDF from 'jspdf';
import './TaskList.css'; 

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/api/tasks');
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    tasks.forEach((task, index) => {
      doc.text(`${index + 1}. ${task.title} - ${task.completed ? 'Completed' : 'Incomplete'}`, 10, 10 + (index * 10));
    });
    doc.save('tasks.pdf');
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task._id} task={task} refreshTasks={fetchTasks} />
      ))}
      <button className='button' onClick={downloadPDF}>Download as PDF</button>
    </div>
  );
};

export default TaskList;
