import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
    }
  };
  const editTodo = (id, title) => {
    let text = window.prompt("Edit Todo", title);
    if (!(text === null) && text.trim()) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) todo.title = text;
          return todo;
        })
      );
    }
  };
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };
  const delTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, markComplete, delTodo, editTodo, addTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};
