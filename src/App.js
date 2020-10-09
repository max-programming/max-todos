import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
// import Todo from "./components/Todo";
import Todos from './components/Todos';
import ThemeSwitcher from './components/ThemeSwitcher';
import Modal from './components/Modal';
import { Link } from '@material-ui/core';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from 'darkreader';
import { v4 as uuid } from 'uuid';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [isDark, setIsDark] = useState(false);
  const [isLight, setIsLight] = useState(true);
  const [isModalOpen, setState] = useState(false);
  const [todoId, setTodoId] = useState(0);

  const channelLink = {
    float: 'right',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'monospace',
  };
  const checkTheme = () => {
    if (isLight === true && isDark === false) disableDarkMode();
    else if (isLight === false && isDark === true) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    }
  };
  checkTheme();

  const changeTheme = () => {
    setIsDark(!isDark);
    setIsLight(!isLight);
    checkTheme();
  };
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    );
  };
  const delTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  const addTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: uuid(),
        title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const editTodo = (id, title, text) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.title = text;
        return todo;
      })
    );
    closeModal();
  };
  const getTodoId = () => {
    return todoId;
  };
  const showModal = (id, title) => {
    setState(!isModalOpen);
    setTodoId(id);
  };
  const closeModal = () => {
    setState(!isModalOpen);
  };

  return (
    <div>
      <ThemeSwitcher changeTheme={changeTheme} />
      <Link
        href="https://youtube.com/c/MaxProgramming"
        target="_blank"
        color="error"
        style={channelLink}
      >
        Max Programming
      </Link>
      <AddTodo addTodo={addTodo} />

      <Todos
        todos={todos}
        setTodos={setTodos}
        markComplete={markComplete}
        delTodo={delTodo}
        showModal={showModal}
      />
      <Modal
        isModalOpen={isModalOpen}
        getTodoId={getTodoId}
        todos={todos}
        closeModal={closeModal}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
