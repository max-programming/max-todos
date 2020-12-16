import { render } from "react-dom";
import { MainProvider } from "./context/MainContext";
import { ThemeProvider } from "./context/ThemeContext";
import { DeleteConfirmProvider } from "./context/DeleteConfirmContext";
import { SmallTextProvider } from "./context/SmallTextContext";
import App from "./App";
import "./styles.css";

render(
  <MainProvider>
    <ThemeProvider>
      <DeleteConfirmProvider>
        <SmallTextProvider>
            <App />
        </SmallTextProvider>
      </DeleteConfirmProvider>
    </ThemeProvider>
  </MainProvider>,
  document.getElementById("root")
);
