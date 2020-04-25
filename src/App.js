import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Link } from "@material-ui/core";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";

function App() {
  const [todos, setTodos] = useState([]);
  const [isDark, setIsDark] = useState();
  const reversedTodos = todos.reverse();
  const channelLink = {
    float: "right",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "monospace",
  };
  const changeTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else disableDarkMode();
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
      <AddTodo makeTodos={(text) => setTodos([...todos, text])} />
      {reversedTodos.map((todo, index) => {
        return <Todo todoNo={index} todo={todo} key={index} />;
      })}
    </div>
  );
}

export default App;
