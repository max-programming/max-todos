import { Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteTwoTone";
import EditIcon from "@material-ui/icons/EditTwoTone";
import useChangeMenuIcon from "../hooks/useChangeMenuIcon";
import StarIconOutlined from "@material-ui/icons/StarTwoTone";
import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";

const ITEM_HEIGHT = 48;

export default function ActionsMenu({
  deleteTodo,
  setEditOpen,
  markStar,
  todo,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const MenuIcon = useChangeMenuIcon();
  const options = [
    {
      name: todo.starred ? "Unstar" : "Star",
      customColor: todo.starred ? "#CCA43A" : "#000",
      icon: todo.starred ? StarIcon : StarIconOutlined,
      method: () => {
        markStar(todo.id);
        setAnchorEl(null);
      },
    },
    {
      name: "Edit",
      color: "primary",
      icon: EditIcon,
      method: () => {
        setEditOpen(true);
        setAnchorEl(null);
      },
    },
    {
      name: "Delete",
      color: "error",
      icon: DeleteIcon,
      method: (e) => {
        deleteTodo(e);
        setAnchorEl(null);
      },
    },
  ];
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
        {options.map((option) => (
          <MenuItem key={option.name} onClick={option.method}>
            <option.icon
              color={option.color && option.color}
              style={{ color: !option.color && option.customColor }}
            />
            &nbsp;
            <Typography
              color={option.color && option.color}
              style={{ color: !option.color && option.customColor }}
            >
              {option.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
