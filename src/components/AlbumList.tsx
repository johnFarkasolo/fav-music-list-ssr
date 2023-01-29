import { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import { HeartIcon, TrashIcon } from "../assets/icons";
import { Album } from "../types/album";
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
  const {
    dispatch: { translate },
  } = useContext(LangContext);

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
              <Button variant="outline-secondary" onClick={() => onDelete(id)}>
                <TrashIcon color="black" />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
