import React from "react";
import ReactDOM from "react-dom";
import { TodoProvider } from "./components/context/TodoContext";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
