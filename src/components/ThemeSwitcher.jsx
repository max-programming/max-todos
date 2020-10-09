import React from 'react';
import { Button } from '@material-ui/core';

const ThemeSwitcher = ({ changeTheme }) => {
  return (
    <Button variant="contained" size="small" onClick={changeTheme}>
      Change Theme
    </Button>
  );
};

export default ThemeSwitcher;
