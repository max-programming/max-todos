import React, { useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import Todo from "./Todo";

const Todos = () => {
  const { todos, markComplete, delTodo, editTodo } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
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
