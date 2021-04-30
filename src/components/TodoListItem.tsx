import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  closeTodo: CloseTodo;
}

export const TodoListItem: React.FunctionComponent<Props> = ({ todo, toggleTodo, closeTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{' '}
        {todo.text}
      </label>
      <button
                type="button"
                className="close_btn"
                onClick={e => {
                e.preventDefault();
                closeTodo(todo);
                }}>
                x
            </button>
    </li>
  );
};