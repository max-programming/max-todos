import { useContext } from "react";
import { MainContext } from "./components/context/MainContext";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Settings from "./components/pages/Settings";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import { Route } from "wouter";
import About from "./components/pages/About";

function App() {
  const { addTodo } = useContext(MainContext);

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
