import React, { Component } from 'react';

import { TodoList } from './TodoList/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Todo-1', completed: false },
      { id: 'id-2', text: 'Todo-2', completed: false },
      { id: 'id-3', text: 'Todo-3', completed: false },
      { id: 'id-4', text: 'Todo-4', completed: false },
    ],
  };

  onDeletedTodo = id => {
    this.setState(preState => ({ todos: preState.todos.filter(todo => todo.id !== id) }));
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} onDeletedTodo={this.onDeletedTodo} />
      </>
    );
  }
}

export default App;
