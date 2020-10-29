import { Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteTwoTone";
import EditIcon from "@material-ui/icons/EditTwoTone";
import MenuIcon from "@material-ui/icons/MoreHorizOutlined";
import StarIconOutlined from "@material-ui/icons/StarTwoTone";
import StarIcon from "@material-ui/icons/Star";
import React from "react";

const ITEM_HEIGHT = 48;

export default function ActionsMenu({
  deleteTodo,
  setEditOpen,
  markStar,
  todo,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEvent = (option, e) => {
    if (option === "Star") markStar(todo.id);
    else if (option === "Edit") setEditOpen(true);
    else if (option === "Delete") deleteTodo(e);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        centerRipple={false}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleEvent}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {["Star", "Edit", "Delete"].map((option) => (
          <MenuItem key={option} onClick={(e) => handleEvent(option, e)}>
            {option === "Star" ? (
              todo.stared ? (
                <StarIcon style={{ color: "#FFCE49" }} />
              ) : (
                <StarIconOutlined />
              )
            ) : option === "Edit" ? (
              <EditIcon color="primary" />
            ) : (
              <DeleteIcon color="error" />
            )}
            &nbsp;&nbsp;
            <Typography
              color={
                option === "Delete"
                  ? "error"
                  : option === "Edit"
                  ? "primary"
                  : "initial"
              }
            >
              {option}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
