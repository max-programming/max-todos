import React, { useState, useContext } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@material-ui/core";
import {
  DeleteSweepTwoTone as DeleteSweepIcon,
  SvgIconComponent,
} from "@material-ui/icons";
import useChangeMenuIcon from "../../hooks/useChangeMenuIcon";
import { MainContext } from "../../context/MainContext";
import { DeleteAllConfirm } from "./DeleteConfirm";

const MoreMenu = () => {
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const open = Boolean(anchorEl);
  const MenuIcon = useChangeMenuIcon();
  const { todos, deleteAll } = useContext(MainContext)!;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  interface Option {
    name: string;
    iconColor:
      | "error"
      | "action"
      | "inherit"
      | "disabled"
      | "primary"
      | "secondary"
      | undefined;
    textColor:
      | "error"
      | "inherit"
      | "primary"
      | "secondary"
      | "initial"
      | "textPrimary"
      | "textSecondary"
      | undefined;
    disabled: boolean;
    icon: SvgIconComponent;
    method: () => void;
  }

  const options: Option[] = [
    {
      name: "Delete All",
      iconColor: "error",
      textColor: "error",
      disabled: todos.length === 0,
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
          <MenuItem
            key={option.name}
            disabled={option.disabled}
            onClick={option.method}
          >
            <option.icon color={option.iconColor} /> &nbsp;
            <Typography color={option.textColor}>{option.name}</Typography>
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
