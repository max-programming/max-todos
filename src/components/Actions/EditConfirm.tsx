import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
  Button,
} from "@material-ui/core";

interface Props {
  yes: (val: string) => void;
  open: boolean;
  close: () => void;
  value: string;
}

const EditConfirm = ({ open, close, value, yes }: Props) => {
  const [newValue, setNewValue] = useState(value);
  const onClose = () => {
    setNewValue(value);
    close();
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">EDIT ITEM</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please provide the new name for this item.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="New Value"
          type="text"
          fullWidth
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => newValue.trim() && yes(newValue)}
          color="primary"
          variant="contained"
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditConfirm;
