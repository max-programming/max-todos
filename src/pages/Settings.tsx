import { Container, Switch, useMediaQuery } from "@material-ui/core";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DeleteConfirmContext } from "../context/DeleteConfirmContext";
import { SmallTextContext } from "../context/SmallTextContext";

const Settings = () => {
  const { isDeleteConfirmation, changeDeleteConfirm } = useContext(
    DeleteConfirmContext
  )!;
  const { isDark, changeTheme } = useContext(ThemeContext)!;
  const { isSmallText, changeSmallText } = useContext(SmallTextContext)!;
  const matches = useMediaQuery("(max-width: 768px)");

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
            disabled={matches}
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
