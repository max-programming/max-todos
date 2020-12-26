import { TodoType } from "../../types";
import { Typography, IconButton, Menu, MenuItem } from "@material-ui/core";
import {
  DeleteTwoTone as DeleteIcon,
  EditTwoTone as EditIcon,
  StarTwoTone as StarIconOutlined,
  Star as StarIcon,
  SvgIconComponent,
} from "@material-ui/icons";
import useChangeMenuIcon from "../../hooks/useChangeMenuIcon";
import React, { useState } from "react";

const ITEM_HEIGHT = 48;

interface Option {
  name: string;
  customColor?: string | undefined;
  iconColor?:
    | "error"
    | "action"
    | "inherit"
    | "disabled"
    | "primary"
    | "secondary"
    | undefined;
  textColor?:
    | "inherit"
    | "initial"
    | "error"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | undefined;
  icon: SvgIconComponent;
  method: (e?: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

interface Props {
  deleteTodo: (e: any) => void;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  markStar: (id: string) => void;
  todo: TodoType;
}

enum OptionName {
  STAR = "Star",
  UNSTAR = "Unstar",
  EDIT = "Edit",
  DELETE = "Delete",
}

export default function ActionsMenu({
  deleteTodo,
  setEditOpen,
  markStar,
  todo,
}: Props) {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const open = Boolean(anchorEl);
  const MenuIcon = useChangeMenuIcon();

  const options: Option[] = [
    {
      name: todo.starred ? OptionName.UNSTAR : OptionName.STAR,
      customColor: todo.starred ? "#CCA43A" : "#000",
      icon: todo.starred ? StarIcon : StarIconOutlined,
      method: () => {
        markStar(todo.id);
        setAnchorEl(null);
      },
    },
    {
      name: OptionName.EDIT,
      iconColor: "primary",
      textColor: "primary",
      icon: EditIcon,
      method: () => {
        setEditOpen(true);
        setAnchorEl(null);
      },
    },
    {
      name: OptionName.DELETE,
      iconColor: "error",
      textColor: "error",
      icon: DeleteIcon,
      method: (e) => {
        deleteTodo(e);
        setAnchorEl(null);
      },
    },
  ];
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleEvent = (option: OptionName, e: any) => {
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
              color={option.iconColor}
              htmlColor={option.customColor}
            />
            &nbsp;
            <Typography
              color={option.textColor}
              style={{ color: option.customColor }}
            >
              {option.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
