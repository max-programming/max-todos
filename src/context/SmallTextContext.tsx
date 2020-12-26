import { createContext, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface SmallTextInterface {
  isSmallText: boolean;
  changeSmallText: () => void;
}

export const SmallTextContext = createContext<SmallTextInterface | null>(null);

export const SmallTextProvider = ({ children }: Props) => {
  const [isSmallText, setIsSmallText] = useState(
    JSON.parse(localStorage.getItem("smallText")!) || false
  );

  const changeSmallText = () => {
    window.localStorage.setItem("smallText", String(!isSmallText));
    setIsSmallText(!isSmallText);
  };

  const smallTextValue: SmallTextInterface = {
    isSmallText,
    changeSmallText,
  };

  return (
    <SmallTextContext.Provider value={smallTextValue}>
      {children}
    </SmallTextContext.Provider>
  );
};
