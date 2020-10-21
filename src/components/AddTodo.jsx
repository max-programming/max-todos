import { useState } from "react";
import {
  FormControl,
  Container,
  Button,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Add } from "@material-ui/icons";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (e) => setText(e.target.value);
  const createTodo = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
    setOpen(true);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={createTodo} className="add-todo">
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
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          // icon={<Check fontSize="inherit" />}
          elevation={6}
          variant="filled"
          onClose={() => setOpen(false)}
          severity="success"
        >
          Successfully added item!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddTodo;
