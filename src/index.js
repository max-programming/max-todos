import { render } from 'react-dom';
import { MainProvider } from "./context/MainContext";
import App from "./App";
import "./styles.css";

render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.getElementById("root")
);
