import { render } from "react-dom";
import { MainProvider } from "./context/MainContext";
import { ThemeProvider } from "./context/ThemeContext";
import { DeleteConfirmProvider } from "./context/DeleteConfirmContext";
import App from "./App";
import "./styles.css";

render(
  <MainProvider>
    <ThemeProvider>
      <DeleteConfirmProvider>
        <App />
      </DeleteConfirmProvider>
    </ThemeProvider>
  </MainProvider>,
  document.getElementById("root")
);
