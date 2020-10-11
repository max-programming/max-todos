import React from "react";
import { Button } from "@material-ui/core";

const ThemeSwitcher = ({ changeTheme }) => {
  return (
    <Button variant="contained" size="small" onClick={changeTheme}>
      <svg
        style={{ width: "1.5rem", height: "1.5rem" }}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
      </svg>
    </Button>
  );
};

export default ThemeSwitcher;
