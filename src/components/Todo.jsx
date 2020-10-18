import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  useMediaQuery,
  Snackbar,
} from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteConfirm from './DeleteConfirm';
import EditConfirm from './EditConfirm';
import { Alert } from '@material-ui/lab';
import { Check } from '@material-ui/icons';

const Todo = ({ todo, markComplete, delTodo, editTodo, index, onDelete }) => {
  const matches = useMediaQuery('(max-width: 768px)');
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editSnackOpen, setEditSnackOpen] = useState(false);
  let checkedStyle = { textDecoration: 'none' };
  if (todo.completed) checkedStyle.textDecoration = 'line-through';
  else checkedStyle.textDecoration = 'none';
  // todo.completed ? (checkedStyle.textDecoration = "line-through") : null;
  const cardStyles = {
    marginTop: matches ? 20 : 35,
    background: 'lightgray',
  };
  return (
    <Container>
      <Draggable draggableId={todo.id} index={index}>
        {(p) => (
          <Card
            className="root"
            variant="outlined"
            ref={p.innerRef}
            {...p.draggableProps}
            {...p.dragHandleProps}
            style={{ ...cardStyles, userSelect: 'none', ...p.draggableProps.style }}
          >
            <CardContent>
              <Typography variant="h5" component="h2" style={checkedStyle} className="todo-text">
                <IconButton
                  style={{ marginRight: 5 }}
                  onClick={() => markComplete(todo.id)}
                  centerRipple={false}
                >
                  <CheckTwoToneIcon color="action" />
                </IconButton>
                {todo.title}
                <IconButton
                  style={{ float: 'right' }}
                  onClick={() => setDeleteOpen(true)}
                  centerRipple={false}
                >
                  <DeleteTwoToneIcon color="error" />
                </IconButton>
                <IconButton style={{ float: 'right' }} onClick={() => setEditOpen(true)} centerRipple={false}>
                  <EditTwoToneIcon color="primary" />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        )}
      </Draggable>
      <DeleteConfirm
        yes={() => {
          setDeleteOpen(false);
          setTimeout(() => {
            delTodo(todo.id);
            onDelete();
          }, 200);
        }}
        open={deleteOpen}
        close={() => setDeleteOpen(false)}
      />
      <EditConfirm
        yes={(val) => {
          setEditOpen(false);
          editTodo(todo.id, val);
          setEditSnackOpen(true);
        }}
        open={editOpen}
        close={() => setEditOpen(false)}
        value={todo.title}
      />
      <Snackbar
        open={editSnackOpen}
        autoHideDuration={4000}
        onClose={() => setEditSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          icon={<Check fontSize="inherit" />}
          elevation={6}
          variant="filled"
          onClose={() => setEditSnackOpen(false)}
          severity="success"
        >
          Successfully edited item!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Todo;
