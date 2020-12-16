import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: String(Math.random() * 5000),
        title,
        completed: false,
        starred: false,
      };
      const orderTodos = [newTodo, ...todos];
      orderStarAndComplete(orderTodos);
      setTodos(orderTodos);
    }
  };
  const editTodo = (id, text) => {
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
    const orderTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    orderStarAndComplete(orderTodos);
    setTodos(orderTodos);
  };

  const markStar = (id) => {
    const orderTodos = todos.map((todo) => {
      if (todo.id === id) todo.starred = !todo.starred;
      return todo;
    });
    orderStarAndComplete(orderTodos);
    setTodos(orderTodos);
  };

  const orderStarAndComplete = (todos) => {
    todos.sort((x, y) => y.starred - x.starred);
    todos.sort((x, y) => x.completed - y.completed);
  };

  const delTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const deleteAll = () => setTodos([]);
  const moveTodo = (old, new_) => {
    const copy = JSON.parse(JSON.stringify(todos));
    const thing = JSON.parse(JSON.stringify(todos[old]));
    copy.splice(old, 1);
    copy.splice(new_, 0, thing);
    setTodos(copy);
  };

  return (
    <MainContext.Provider
      value={{
        todos,
        setTodos,
        markComplete,
        delTodo,
        deleteAll,
        editTodo,
        addTodo,
        moveTodo,
        markStar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
