import { TodoType } from "../types";
import { createContext, useState, useEffect, ReactNode } from "react";

interface MainContextInterface {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  markComplete: (id: string) => void;
  delTodo: (id: string) => void;
  deleteAll: () => void;
  editTodo: (id: string, text: string) => void;
  addTodo: (title: string) => void;
  moveTodo: (old: number, new_: number) => void;
  markStar: (id: string) => void;
}

interface Props {
  children: ReactNode;
}

export const MainContext = createContext<MainContextInterface | null>(null);

export const MainProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TodoType[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    if (title.trim()) {
      const newTodo = {
        id: String(Math.random() * 5000),
        title,
        completed: false,
        starred: false,
      };
      const orderTodos = [newTodo, ...todos];
      orderStarAndComplete(orderTodos);
      setTodos(orderTodos);
    }
  };
  const editTodo: (id: string, text: string) => void = (
    id: string,
    text: string
  ) => {
    if (!(text === null) && text.trim()) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) todo.title = text;
          return todo;
        })
      );
    }
  };
  const markComplete = (id: string) => {
    const orderTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    orderStarAndComplete(orderTodos);
    setTodos(orderTodos);
  };

  const markStar = (id: string) => {
    const orderTodos = todos.map((todo) => {
      if (todo.id === id) todo.starred = !todo.starred;
      return todo;
    });
    orderStarAndComplete(orderTodos);
    setTodos(orderTodos);
  };

  const orderStarAndComplete = (todos: TodoType[]) => {
    todos.sort((x, y) => y.starred - x.starred);
    todos.sort((x, y) => x.completed - y.completed);
  };

  const delTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));
  const deleteAll = () => setTodos([]);
  const moveTodo = (old: number, new_: number) => {
    const copy = JSON.parse(JSON.stringify(todos));
    const thing = JSON.parse(JSON.stringify(todos[old]));
    copy.splice(old, 1);
    copy.splice(new_, 0, thing);
    setTodos(copy);
  };

  const mainContextValue: MainContextInterface = {
    todos,
    setTodos,
    markComplete,
    delTodo,
    deleteAll,
    editTodo,
    addTodo,
    moveTodo,
    markStar,
  };

  return (
    <MainContext.Provider value={mainContextValue}>
      {children}
    </MainContext.Provider>
  );
};
