import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, markComplete, delTodo, editTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return (
          <Todo
            todoNo={index}
            todo={todo}
            key={index}
            markComplete={markComplete}
            delTodo={delTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
