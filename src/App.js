import React, { useContext } from "react";
import { MainContext } from "./components/context/MainContext";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Link } from "@material-ui/core";

function App() {
  const { addTodo } = useContext(MainContext);

  const channelLink = {
    float: "right",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "monospace",
  };

  return (
    <div>
      <ThemeSwitcher />
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
