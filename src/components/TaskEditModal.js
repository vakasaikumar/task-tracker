const TaskEditModal = ({ task, onSave, onClose }) => {
    const [updatedTask, setUpdatedTask] = useState(task);
  
    const handleChange = (e) => {
      setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
    };
  
    const handleSave = () => {
      onSave(updatedTask);
      onClose();
    };
  
    return (
      <div>
        <input type="text" name="title" value={updatedTask.title} onChange={handleChange} />
        <textarea name="description" value={updatedTask.description} onChange={handleChange} />
        <input type="date" name="dueDate" value={updatedTask.dueDate} onChange={handleChange} />
        <select name="status" value={updatedTask.status} onChange={handleChange}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    );
  };
  
  export default TaskEditModal;
  