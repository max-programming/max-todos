import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkTheme")) || false
  );

  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(
    JSON.parse(localStorage.getItem("deleteConfirmation")) || false
  );

  const changeDeleteConfirm = () => {
    window.localStorage.setItem("deleteConfirmation", !isDeleteConfirmation);
    setIsDeleteConfirmation(!isDeleteConfirmation);
  };

  const changeTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else {
      disableDarkMode();
    }
    window.localStorage.setItem("darkTheme", isDark);
  };
  useEffect(() => {
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else disableDarkMode();
    window.localStorage.setItem("darkTheme", JSON.stringify(isDark));
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, isDark]);

  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: String(Math.random() * 5000),
        title,
        completed: false,
        starred: false,
      };
      const orderTodos = [newTodo, ...todos]
      orderStarAndComplete(orderTodos)
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
    orderStarAndComplete(orderTodos)
    setTodos(orderTodos);
  };

  const markStar = (id) => {
    const orderTodos = todos.map((todo) => {
      if (todo.id === id) todo.starred = !todo.starred;
      return todo;
    })
    orderStarAndComplete(orderTodos)
    setTodos(orderTodos);
  };

  const orderStarAndComplete = (todos) => {
    todos.sort((x, y) => y.starred - x.starred);
    todos.sort((x,y) => x.completed - y.completed)
  }

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
        isDark,
        isDeleteConfirmation,
        changeDeleteConfirm,
        setTodos,
        markComplete,
        delTodo,
        deleteAll,
        editTodo,
        addTodo,
        changeTheme,
        moveTodo,
        markStar,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
