import { createContext, useState, useContext } from "react";
import { Modal } from "@shared/ui/Modal/Modal";

type ModalsContextType = {
  isOpen: boolean;
  openModal: (name: React.ReactNode) => void;
  closeModal: () => void;
};

const ModalsContext = createContext<ModalsContextType | null>(null);

export function ModalsProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const openModal = (node: React.ReactNode) => {
    setIsOpen(true);
    setContent(node);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalsContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {content}
      </Modal>
    </ModalsContext.Provider>
  );
}

export const useModalManager = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useModalManager must be used within a ModalProvider");
  }
  return context;
};
