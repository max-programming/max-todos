import { createContext, useEffect, useState } from "react";
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
} from "darkreader";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkTheme")) || false
  );

  const changeTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else {
      disableDarkMode();
    }
    localStorage.setItem("darkTheme", isDark);
  };

  useEffect(() => {
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
    } else disableDarkMode();
    localStorage.setItem("darkTheme", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
