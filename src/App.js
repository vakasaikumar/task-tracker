import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the task being edited

  // Load tasks from local storage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    if (editIndex !== null) {
      // Update an existing task
      const updatedTasks = tasks.map((t, i) => (i === editIndex ? task : t));
      setTasks(updatedTasks);
      setEditIndex(null); // Reset edit state
    } else {
      setTasks([...tasks, task]);
    }
  };

  // Set the task to be edited
  const editTask = (index) => {
    setEditIndex(index);
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <TaskForm onAddTask={addTask} task={tasks[editIndex]} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
