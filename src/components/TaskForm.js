// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = event => {
    setTaskName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddTask({ id: Date.now(), name: taskName, completed: false });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskName} onChange={handleInputChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
