import { createContext, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface DeleteConfirmInterface {
  isDeleteConfirmation: boolean;
  changeDeleteConfirm: () => void;
}

export const DeleteConfirmContext = createContext<DeleteConfirmInterface | null>(
  null
);

export const DeleteConfirmProvider = ({ children }: Props) => {
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState(
    JSON.parse(localStorage.getItem("deleteConfirmation")!) || false
  );

  const changeDeleteConfirm = () => {
    localStorage.setItem("deleteConfirmation", String(!isDeleteConfirmation));
    setIsDeleteConfirmation(!isDeleteConfirmation);
  };

  const deleteConfirmValue: DeleteConfirmInterface = {
    isDeleteConfirmation,
    changeDeleteConfirm,
  };

  return (
    <DeleteConfirmContext.Provider value={deleteConfirmValue}>
      {children}
    </DeleteConfirmContext.Provider>
  );
};
