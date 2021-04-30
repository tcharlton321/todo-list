import React from 'react';
import { TodoListItem } from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  closeTodo: CloseTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, closeTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} closeTodo={closeTodo}/>
      ))}
    </ul>
  );
};