import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Divider,
  useMediaQuery,
} from "@material-ui/core";

interface Props {
  open: boolean;
  close: () => void;
  yes: () => void;
}

export const DeleteConfirm = ({ open, close, yes }: Props) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>DELETE ITEM?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this item?
        </DialogContentText>
        <div style={{ display: matches ? "none" : "block" }}>
          <Divider />
          <br />
          <DialogContentText>
            <span style={{ color: "green", fontWeight: "bold" }}>PROTIP:</span>
            <br />
            You can hold down shift when clicking the <b>delete button</b> to
            bypass this confirmation entirely
          </DialogContentText>
        </div>
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

export const DeleteAllConfirm = ({ open, close, yes }: Props) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle>DELETE ALL ITEMS?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete all items?
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
