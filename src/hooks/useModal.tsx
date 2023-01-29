import { useContext, useState } from "react";
import { LangContext } from "../context/LanguageContext";
import { toast } from "react-toastify";
import { useAlbums } from "./useAlbum";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onDeleteAlbum } = useAlbums();

  const onClose = () => {
    setIsOpen(false);
  };

  const onAccept = (id: string) => {
    onDeleteAlbum(id);
    setIsOpen(false);
  };

  return {
    isOpen,
    setIsOpen,
    onClose,
    onAccept,
  };
};
