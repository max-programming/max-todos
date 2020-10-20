import React, { useState } from "react";
import DeleteConfirm from "./DeleteConfirm";
import EditConfirm from "./EditConfirm";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
  useMediaQuery,
  Checkbox,
} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";

const Todo = ({
  todo,
  markComplete,
  delTodo,
  editTodo,
  index,
  onDelete,
  onEdit,
}) => {
  const matches = useMediaQuery("(max-width: 768px)");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  let checkedStyle = { textDecoration: "none" };
  if (todo.completed) checkedStyle.textDecoration = "line-through";
  else checkedStyle.textDecoration = "none";
  // todo.completed ? (checkedStyle.textDecoration = "line-through") : null;
  const cardStyles = {
    marginTop: matches ? 20 : 35,
    background: "lightgray",
  };
  const iconStyles = { 
    float: "right", 
    paddingTop: "10px"
  }

  return (
    <Container>
      <Draggable draggableId={todo.id} index={index}>
        {(p) => (
          <Card
            className="todo-card"
            variant="outlined"
            ref={p.innerRef}
            {...p.draggableProps}
            {...p.dragHandleProps}
            style={{
              ...cardStyles,
              userSelect: "none",
              ...p.draggableProps.style,
            }}
          >
            <CardContent className="card-content" style={{padding : "16px"}}>
              <Typography
                variant="h5"
                component="h2"
                style={checkedStyle}
                className="todo-text"
              >
                <Checkbox
                  color="primary"
                  style={{ marginRight: 5 }}
                  onClick={() => markComplete(todo.id)}
                  centerRipple={false}
                />
                {todo.title}
                <IconButton
                  style={iconStyles}
                  onClick={() => setDeleteOpen(true)}
                  centerRipple={false}
                >
                  <DeleteTwoToneIcon color="error" />
                </IconButton>
                <IconButton
                  style={iconStyles}
                  onClick={() => setEditOpen(true)}
                  centerRipple={false}
                >
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
          setTimeout(() => {
            editTodo(todo.id, val);
            onEdit();
          }, 200);
        }}
        open={editOpen}
        close={() => setEditOpen(false)}
        value={todo.title}
      />
    </Container>
  );
};

export default Todo;
