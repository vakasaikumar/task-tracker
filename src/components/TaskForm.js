import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    if (task) {
      // Populate fields when editing a task
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setStatus(task.status);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dueDate) {
      alert('Title and Due Date are required!');
      return;
    }

    onAddTask({ title, description, dueDate, status });
    // Clear the form after submission
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
