import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { LangContext } from "../../context/LanguageContext";

interface DeleteModalProps {
  isShow: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const DeleteModal = ({
  isShow,
  onClose,
  onAccept,
}: DeleteModalProps) => {
  const {
    dispatch: { translate },
  } = useContext(LangContext);

  return (
    <Modal show={isShow} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{translate("deleteTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{translate("deleteMessage")}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onAccept}>
          {translate("accept")}
        </Button>
        <Button variant="primary" onClick={onClose}>
          {translate("decline")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
