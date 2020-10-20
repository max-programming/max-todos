import { Container, Switch } from "@material-ui/core";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Settings = () => {
  const { isDark, changeTheme } = useContext(MainContext);
  return (
    <>
      <Container maxWidth="sm">
        <h1>Settings Page</h1>
        <h3>
          Dark Mode:
          <Switch onChange={changeTheme} checked={isDark} color="primary" />
        </h3>
      </Container>
    </>
  );
};

export default Settings;
