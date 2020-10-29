import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Settings from "./pages/Settings";
import About from "./pages/About";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import { Route } from "wouter";

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
