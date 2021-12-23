import React from 'react';

export const TodoList = ({ todos, onDeletedTodo }) => (
  <ul>
    {todos.map(({ id, text, completed }) => (
      <li key={id}>
        <p>{text}</p>
        <button type="submit" onClick={() => onDeletedTodo(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);
