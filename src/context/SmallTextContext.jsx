import { createContext, useState } from "react";

export const SmallTextContext = createContext();

export const SmallTextProvider = ({ children }) => {
    const [isSmallText, setIsSmallText] = useState(
        JSON.parse(localStorage.getItem("smallText")) || false
      );
    
    const changeSmallText = () => {
        window.localStorage.setItem("smallText", !isSmallText);
        setIsSmallText(!isSmallText);
    };


  return (
    <SmallTextContext.Provider
      value={{ isSmallText, changeSmallText }}
    >
      {children}
    </SmallTextContext.Provider>
  );
};
