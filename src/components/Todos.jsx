import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, markComplete, delTodo }) => {
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
          />
        );
      })}
    </div>
  );
};

export default Todos;
