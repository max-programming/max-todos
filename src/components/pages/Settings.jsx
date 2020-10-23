import { Container, Switch } from "@material-ui/core";
import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Settings = () => {
  const {
    isDark,
    changeTheme,
    isDeleteConfirmation,
    changeDeleteConfirm,
  } = useContext(MainContext);
  return (
    <>
      <Container>
        <h1>Settings</h1>
        <h3>
          Dark Mode:
          <Switch onChange={changeTheme} checked={isDark} color="primary" />
        </h3>
        <h3>
          Disable Delete Confirmation:
          <Switch
            onChange={changeDeleteConfirm}
            checked={isDeleteConfirmation}
            color="primary"
          />
        </h3>
      </Container>
    </>
  );
};

export default Settings;
