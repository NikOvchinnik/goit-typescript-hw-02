import Modal from "react-modal";
import style from "./ImageModal.module.css";
import { FC } from "react";

Modal.setAppElement("#root");

interface ImageModalProps {
  modalImg: string | null;
  modalIsOpen: boolean;
  onCloseModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  modalImg,
  modalIsOpen,
  onCloseModal,
}) => {
  return (
    <>
      {modalImg && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={onCloseModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          className={style.modalContainer}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
        >
          <img src={modalImg} className={style.imgModal}></img>
        </Modal>
      )}
    </>
  );
};

export default ImageModal;
