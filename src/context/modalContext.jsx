import { createContext, useContext, useReducer } from "react";

const ModalContext = createContext();
const useModal = () => useContext(ModalContext);

const MODAL_CONSTANTS = {
  ADD_NOTE: "ADD_NOTE",
  UPDATE_NOTE: "UPDATE_NOTE",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const ModalReducer = (modalState, modalAction) => {
  const { ADD_NOTE, UPDATE_NOTE, CLOSE_MODAL } = MODAL_CONSTANTS;
  switch (modalAction.type) {
    case ADD_NOTE:
      return { ...modalState, show: true, buttonType: "Add" };
    case UPDATE_NOTE:
      return {
        ...modalState,
        show: true,
        buttonType: "Update",
        noteInfo: modalAction.payload,
      };
    case CLOSE_MODAL:
      return { ...modalState, show: false };
  }
};

const ModalProvider = ({ children }) => {
  const [modalState, modalDispatch] = useReducer(ModalReducer, {
    show: false,
    buttonType: "ADD",
    noteInfo: {},
  });
  return (
    <ModalContext.Provider value={{ modalState, modalDispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export { useModal, ModalProvider };
