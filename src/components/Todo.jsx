import React, { useState, useContext } from "react";
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
  Grid
} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import { MainContext } from "./context/MainContext";

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
  const { isDeleteConfirmation } = useContext(MainContext);
  let checkedStyle = { textDecoration: "none" };
  if (todo.completed) checkedStyle.textDecoration = "line-through";
  else checkedStyle.textDecoration = "none";
  // todo.completed ? (checkedStyle.textDecoration = "line-through") : null;
  const styles = {
    card: {
      marginTop: matches ? 20 : 35,
      background: "lightgray",
    },
    icon: {
      float: "right",
      paddingTop: "10px",
    },
    text: {
      wordBreak: "break-word",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }
  const deleteTodo = (e) => {
    if (e.shiftKey || isDeleteConfirmation) {
      delTodo(todo.id);
      onDelete();
    } else setDeleteOpen(true);
  };
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
              ...styles.card,
              userSelect: "none",
              ...p.draggableProps.style,
            }}
          >
            <CardContent className="card-content" style={{ padding: "16px" }}>
              <Typography
                variant="h5"
                component="h2"
                style={checkedStyle}
                className="todo-text"
              >
                <Grid container  justify="center" alignItems="center">
                  <Grid item xs={2} sm={1} md={1}>
                    <Checkbox
                      color="primary"
                      style={{ marginRight: 5 }}
                      onClick={() => markComplete(todo.id)}
                      centerRipple={false}
                    />
                  </Grid>
                  <Grid item xs={6} sm={8} md={9}>
                    <div style={styles.text}>
                      {todo.title}
                    </div>
                  </Grid>
                  <Grid item xs={4} sm={3} md={2}>
                    <IconButton
                      style={styles.icon}
                      onClick={deleteTodo}
                      centerRipple={false}
                    >
                      <DeleteTwoToneIcon color="error" />
                    </IconButton>
                    <IconButton
                      style={styles.icon}
                      onClick={() => setEditOpen(true)}
                      centerRipple={false}
                    >
                      <EditTwoToneIcon color="primary" />
                    </IconButton>
                  </Grid>
                </Grid>
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
