import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
import { Check, Delete } from "@material-ui/icons";

const Todo = ({ todo, markComplete, delTodo }) => {
  let checkedStyle = { textDecoration: "none" };
  if (todo.completed) checkedStyle.textDecoration = "line-through";
  else checkedStyle.textDecoration = "none";
  // todo.completed ? (checkedStyle.textDecoration = "line-through") : null;
  return (
    <Container>
      <Card
        className="root"
        variant="outlined"
        style={{ marginTop: 35, background: "lightgray" }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" style={checkedStyle}>
            <IconButton onClick={markComplete.bind(this, todo.id)}>
              <Check style={{ color: "green" }} />
            </IconButton>
            { todo.title }
            <IconButton
              style={{ float: "right" }}
              onClick={delTodo.bind(this, todo.id)}
            >
              <Delete style={{ color: "red" }} />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;
