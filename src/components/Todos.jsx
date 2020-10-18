import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import Todo from "./Todo";

const Todos = () => {
  const { todos, markComplete, delTodo, editTodo } = useContext(MainContext);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            markComplete={markComplete}
            delTodo={delTodo}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
