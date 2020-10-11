import React, { useState, useContext } from "react";
import { TodoContext } from "./components/context/TodoContext";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Link } from "@material-ui/core";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";

function App() {
  const { addTodo } = useContext(TodoContext);
  const [isDark, setIsDark] = useState(false);

  const channelLink = {
    float: "right",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "monospace",
  };
  const checkTheme = () => {
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else disableDarkMode();
  };
  checkTheme();

  const changeTheme = () => {
    setIsDark(!isDark);
    checkTheme();
  };
  return (
    <div>
      <ThemeSwitcher isDark={isDark} changeTheme={changeTheme} />
      <Link
        href="https://youtube.com/c/MaxProgramming"
        target="_blank"
        color="error"
        style={channelLink}
      >
        Max Programming
      </Link>
      <AddTodo addTodo={addTodo} />

      <Todos />
    </div>
  );
}

export default App;
