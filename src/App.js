import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Link } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([]);
  const channelLink = {
    float: "right",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "monospace",
  };
  return (
    <div>
      <Link
        href="https://youtube.com/c/MaxProgramming"
        target="_blank"
        color="error"
        style={channelLink}
      >
        Max Programming
      </Link>
      <AddTodo makeTodos={(text) => setTodos([...todos, text])} />
      {todos.map((todo, index) => {
        return <Todo todoNo={index} todo={todo} key={index} />;
      })}
    </div>
  );
}

export default App;
