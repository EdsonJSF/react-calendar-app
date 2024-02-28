import { useState } from "react";
import Modal from "react-modal";

import "./CalendarModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [openModal, setOpenModal] = useState(true);
  const handlecloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={handlecloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1>modal</h1>
      <p>content</p>
    </Modal>
  );
};
