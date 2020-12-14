import { useState, useContext } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import useChangeMenuIcon from "../hooks/useChangeMenuIcon";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweepTwoTone";
import { MainContext } from "../context/MainContext";

const MoreMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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
        deleteAll();
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
          <MenuItem key={option.name} onClick={option.method} color="long">
            <option.icon color={option.color} /> &nbsp;
            <Typography color={option.color}>{option.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoreMenu;
