// TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const handleToggleComplete = () => {
    setCompleted(!completed);
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {task.name}
      <button onClick={handleToggleComplete}>Complete</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
