import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Divider,
} from "@material-ui/core";

const DeleteConfirm = ({ open, close, yes }) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>DELETE ITEM?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
        <Divider />
        <br />
        <DialogContentText>
          <span style={{ color: "green", fontWeight: "bold" }}>PROTIP:</span>
          <br />
          You can hold down shift when clicking the <b>delete button</b> to
          bypass this confirmation entirely
        </DialogContentText>
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
