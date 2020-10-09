import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, markComplete, delTodo, showModal }) => {
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
            showModal={showModal}
          />
        );
      })}
    </div>
  );
};

export default Todos;
