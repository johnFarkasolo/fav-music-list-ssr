import { useContext, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { HeartIcon, TrashIcon } from "../assets/icons";
import { Album } from "../types/album";
import { DeleteModal } from "./UI/DeleteModal";
import { EmptyData } from "./UI/EmptyData";
import { LangContext } from "../context/LanguageContext";
import { textEllipsis } from "../utils/string";

interface AlbumListProps {
  albums: Album[];
  onDelete: (id: string) => void;
  onAddToFavorite: (id: string) => void;
}

export const AlbumList = ({
  albums,
  onAddToFavorite,
  onDelete,
}: AlbumListProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const {
    dispatch: { translate },
  } = useContext(LangContext);

  const onAccept = (key: string) => {
    onDelete(key);
    setIsShowModal(false);
  };

  if (!albums.length) {
    return <EmptyData />;
  }

  return (
    <Table striped bordered hover className="mb-0">
      <thead>
        <tr>
          <th>#</th>
          <th>{translate("albumName")}</th>
          <th>{translate("authorName")}</th>
          <th>#</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {albums.map(({ id, albumName, artistName, isFavorite }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{textEllipsis(albumName, 16)}</td>
            <td>{textEllipsis(artistName, 16)}</td>
            <td>
              <Button
                variant="outline-secondary"
                onClick={() => onAddToFavorite(id)}
              >
                <HeartIcon fill={isFavorite ? "red" : "none"} />
              </Button>
            </td>
            <td>
              <Button
                variant="outline-secondary"
                onClick={() => setIsShowModal(true)}
              >
                <TrashIcon color="black" />
              </Button>
              <DeleteModal
                isShow={isShowModal}
                onClose={() => setIsShowModal(false)}
                onAccept={() => onAccept(id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
