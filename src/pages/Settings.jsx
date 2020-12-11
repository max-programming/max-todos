import { Container, Switch } from "@material-ui/core";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Settings = () => {
  const {
    isDark,
    changeTheme,
    isDeleteConfirmation,
    changeDeleteConfirm,
    isSmallText,
    changeSmallText
  } = useContext(MainContext);
  return (
    <>
      <Container>
        <h3>
          Dark Mode:
          <Switch onChange={changeTheme} checked={isDark} color="primary" />
        </h3>
        <h3>
          Small Text Mode:
          <Switch
            onChange={changeSmallText}
            checked={isSmallText}
            color="primary"
          />
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
