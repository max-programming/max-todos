import React, { useState } from "react";
import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddTodo = ({ makeTodos }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const createTodo = (e) => {
    e.preventDefault();
    setText("");
    makeTodos(text);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={createTodo}>
          <FormControl fullWidth={true}>
            <TextField
              label="I will do this"
              variant="standard"
              onChange={handleChange}
              required={true}
              value={text}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 5 }}
              type="submit"
            >
              <Add />
              Add
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default AddTodo;
