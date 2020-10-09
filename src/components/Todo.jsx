import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  IconButton,
} from "@material-ui/core";
// import { Check, Delete } from '@material-ui/icons';
// import DoneOutlineTwoToneIcon from "@material-ui/icons/DoneOutlineTwoTone";
import CheckTwoToneIcon from '@material-ui/icons/CheckTwoTone';
// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
// import EditIcon from '@material-ui/icons/Edit';

const Todo = ({ todo, markComplete, delTodo, editTodo }) => {
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
            <IconButton
              style={{ marginRight: 5 }}
              onClick={markComplete.bind(this, todo.id)}
              centerRipple={false}
            >
              <CheckTwoToneIcon color="action" />
            </IconButton>
            {todo.title}
            <IconButton
              style={{ float: "right" }}
              onClick={delTodo.bind(this, todo.id)}
              centerRipple={false}
            >
              <DeleteTwoToneIcon color="error" />
            </IconButton>
            <IconButton
              style={{ float: "right" }}
              onClick={editTodo.bind(this, todo.id, todo.title)}
              centerRipple={false}
            >
              <EditTwoToneIcon color="primary" />
            </IconButton>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Todo;
