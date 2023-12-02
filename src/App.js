// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const handleToggleComplete = taskId => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = taskId => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  const handleAddTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };


  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDelete={handleDelete} />
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;