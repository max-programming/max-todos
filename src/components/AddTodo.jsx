import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddTodo = ({ makeTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const createTodo = (e) => {
    makeTodos(text);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <FormControl>
          <TextField
            label="I will do this"
            variant="standard"
            onChange={handleChange}
            required={true}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 5 }}
            onClick={createTodo}
          >
            <Add />
            Add
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddTodo;
