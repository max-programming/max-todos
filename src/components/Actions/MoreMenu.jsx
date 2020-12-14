import { useState, useContext } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweepTwoTone";
import useChangeMenuIcon from "../../hooks/useChangeMenuIcon";
import { MainContext } from "../../context/MainContext";
import { DeleteAllConfirm } from "./DeleteConfirm";

const MoreMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const open = Boolean(anchorEl);
  const MenuIcon = useChangeMenuIcon();
  const { deleteAll } = useContext(MainContext);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const options = [
    {
      name: "Delete All",
      color: "error",
      icon: DeleteSweepIcon,
      method: () => {
        handleClose();
        setDeleteOpen(true);
      },
    },
  ];

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.name} onClick={option.method}>
            <option.icon color={option.color} /> &nbsp;
            <Typography color={option.color}>{option.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <DeleteAllConfirm
        yes={() => {
          setDeleteOpen(false);
          setTimeout(() => deleteAll(), 200);
        }}
        open={deleteOpen}
        close={() => setDeleteOpen(false)}
      />
    </div>
  );
};

export default MoreMenu;
