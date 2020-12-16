import { createContext, useState } from "react";

export const DeleteConfirmContext = createContext();

export const DeleteConfirmProvider = ({ children }) => {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(
    JSON.parse(localStorage.getItem("deleteConfirmation")) || false
  );

  const changeDeleteConfirm = () => {
    localStorage.setItem("deleteConfirmation", !isDeleteConfirmation);
    setIsDeleteConfirmation(!isDeleteConfirmation);
  };
  return (
    <DeleteConfirmContext.Provider
      value={{ isDeleteConfirmation, changeDeleteConfirm }}
    >
      {children}
    </DeleteConfirmContext.Provider>
  );
};
