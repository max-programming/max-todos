import { useContext } from "react";
import { Route } from "wouter";
import AddTodo from "./components/Todos/AddTodo";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import Todos from "./components/Todos/Todos";
import { MainContext } from "./context/MainContext";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  const { addTodo } = useContext(MainContext)!;

  return (
    <div style={{ height: "100vh" }}>
      <PersistentDrawerLeft />
      <Route path="/">
        <AddTodo addTodo={addTodo} />
        <Todos />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
