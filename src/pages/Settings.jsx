import { Container, Switch } from "@material-ui/core";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DeleteConfirmContext } from "../context/DeleteConfirmContext";

const Settings = () => {
  const { isDeleteConfirmation, changeDeleteConfirm } = useContext(
    DeleteConfirmContext
  );
  const { isDark, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <Container>
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
