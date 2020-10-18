import React, { useContext, Fragment, useState } from 'react';
import { MainContext } from './context/MainContext';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import Todo from './Todo';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Check } from '@material-ui/icons';

const Todos = () => {
  const { todos, markComplete, delTodo, editTodo, moveTodo } = useContext(MainContext);
  const [deleteSnackOpen, setDeleteSnackOpen] = useState(false);
  const onDragEnd = (x) => {
    if (!x.destination) return console.log(x);
    moveTodo(x.source.index, x.destination.index);
  };
  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="0">
          {(p) => (
            <div {...p.droppableProps} ref={p.innerRef}>
              {todos.map((todo, i) => {
                return (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    markComplete={markComplete}
                    delTodo={delTodo}
                    editTodo={editTodo}
                    onDelete={() => setDeleteSnackOpen(true)}
                    index={i}
                  />
                );
              })}
              {p.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Snackbar
        open={deleteSnackOpen}
        autoHideDuration={4000}
        onClose={() => setDeleteSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          icon={<Check fontSize="inherit" />}
          elevation={6}
          variant="filled"
          onClose={() => setDeleteSnackOpen(false)}
          severity="success"
        >
          Successfully deleted item!
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Todos;
