import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <AddTodo makeTodos={(text) => setTodos([...todos, text])} />
      {todos.map((todo, index) => {
        return <Todo todoNo={index} todo={todo} key={index} />;
      })}
    </div>
  );
}

export default App;
