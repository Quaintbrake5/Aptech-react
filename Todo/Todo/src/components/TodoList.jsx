/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../components/styles/todoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask!== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id? {...todo, completed:!todo.completed } : todo
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id!== id));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Add new task..."
          className="new-task-input"
        />
        <button type="submit" className="add-task-button">
          Add Task
        </button>
      </form>
      <ul className="todo-list-items">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-list-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
              className="todo-checkbox"
            />
            <span
              style={{
                textDecoration: todo.completed? 'line-through' : 'none',
              }}
              className="todo-text"
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTask(todo.id)}
              className="delete-task-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;