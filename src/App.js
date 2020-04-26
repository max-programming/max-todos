import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
// import Todo from "./components/Todo";
import Todos from "./components/Todos";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Link } from "@material-ui/core";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  let isDark, isLight;
  isDark = true;
  isLight = !isDark;
  const channelLink = {
    float: "right",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "monospace",
  };
  const checkTheme = () => {
    if (isLight === true && isDark === false) disableDarkMode();
    else if (isLight === false && isDark === true) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    }
  };
  checkTheme();

  const changeTheme = () => {
    isDark = !isDark;
    isLight = !isLight;
    checkTheme();
  };
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
    // console.log(id);
  };
  const delTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <ThemeSwitcher changeTheme={changeTheme} />
      <Link
        href="https://youtube.com/c/MaxProgramming"
        target="_blank"
        color="error"
        style={channelLink}
      >
        Max Programming
      </Link>
      <AddTodo addTodo={addTodo} />

      <Todos
        todos={todos}
        setTodos={setTodos}
        markComplete={markComplete}
        delTodo={delTodo}
      />
    </div>
  );
}

export default App;
