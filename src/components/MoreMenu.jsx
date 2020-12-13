import { useState, useContext } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweepTwoTone";
import { MainContext } from "../context/MainContext";

const MoreMenu = ({ isMobile }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { deleteAll } = useContext(MainContext);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const options = [
    {
      name: "Delete All",
      icon: <DeleteSweepIcon />,
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
        {isMobile ? (
          <MoreVertIcon style={{ color: "white" }} />
        ) : (
          <MoreHorizIcon style={{ color: "white" }} />
        )}
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
            {option.icon}&nbsp;{option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MoreMenu;
