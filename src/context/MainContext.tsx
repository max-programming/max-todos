import { TodoType } from "../types";
import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface MainContextInterface {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  markComplete: (id: string, completed: boolean) => void;
  delTodo: (id: string) => void;
  deleteAll: () => void;
  editTodo: (id: string, text: string) => void;
  addTodo: (title: string) => void;
  moveTodo: (old: number, new_: number) => void;
  markStar: (id: string, starred: boolean) => void;
}

interface Props {
  children: ReactNode;
}

const endpoint = "http://localhost:5000/todos";

export const MainContext = createContext<MainContextInterface | null>(null);

export const MainProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get<TodoType[]>(endpoint);
      setTodos(res.data);
      console.log(res.data);
    };
    getTodos();
  }, []);

  const addTodo = async (title: string) => {
    if (title.trim()) {
      const res = await axios.post(endpoint, {
        title,
      });

      setTodos([...todos, res.data]);
    }
  };

  const delTodo = async (id: string) => {
    await axios.delete(`${endpoint}/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const deleteAll = async () => {
    await axios.delete(endpoint);
    setTodos([]);
  };

  const editTodo = async (id: string, text: string) => {
    if (!(text === null) && text.trim()) {
      const res = await axios.put(`${endpoint}/update/${id}`, { title: text });
      console.log(res);
      setTodos(
        todos.map(todo => {
          if (todo._id === id) todo.title = text;
          return todo;
        })
      );
    }
  };

  const markComplete = async (id: string, completed: boolean) => {
    await axios.put(`${endpoint}/complete/${id}`, { completed });
    const orderTodos = todos.map(todo => {
      if (todo._id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    orderStarAndComplete(orderTodos);
    setTodos(orderTodos);
  };

  const markStar = async (id: string, starred: boolean) => {
    await axios.put(`${endpoint}/star/${id}`, { starred });
    const orderTodos = todos.map(todo => {
      if (todo._id === id) todo.starred = !todo.starred;
      return todo;
    });
    orderStarAndComplete(orderTodos);
    setTodos(orderTodos);
  };

  const orderStarAndComplete = (todos: TodoType[]) => {
    todos.sort((x, y) => y.starred - x.starred);
    todos.sort((x, y) => x.completed - y.completed);
  };

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
