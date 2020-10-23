import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core';

const DeleteConfirm = ({ open, close, yes }) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>Delete this item?</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you really sure you want to delete this item?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          No
        </Button>
        <Button onClick={yes} color="primary" variant="contained">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirm;
