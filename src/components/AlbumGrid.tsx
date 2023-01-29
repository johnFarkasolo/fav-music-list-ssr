import { useState } from "react";
import { Card, Stack, Button, Row, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { HeartIcon, TrashIcon } from "../assets/icons";
import { Album } from "../types/album";
import { DeleteModal } from "./UI/DeleteModal";
import { EmptyData } from "./UI/EmptyData";

interface AlbumGridProps {
  albums: Album[];
  onDelete: (id: string) => void;
  onAddToFavorite: (id: string) => void;
}

export const AlbumGrid = ({
  albums,
  onDelete,
  onAddToFavorite,
}: AlbumGridProps) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onAccept = (key: string) => {
    onDelete(key);
    setIsShowModal(false);
  };

  if (!albums.length) {
    return <EmptyData />;
  }

  return (
    <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
      {albums.map(({ id, albumName, artistName, createDate, isFavorite }) => (
        <Col key={id}>
          <Card className="h-100 text-reset text-decoration-none card">
            <CardHeader className="d-flex justify-content-between">
              <Button
                variant="outline-secondary"
                onClick={() => onAddToFavorite(id)}
              >
                <HeartIcon fill={isFavorite ? "red" : "none"} />
              </Button>
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
            </CardHeader>
            <Card.Body>
              <Stack
                gap={2}
                className="align-items-center justify-content-center h-100"
              >
                <span className="fs-8">{createDate}</span>
                <span className="fs-3">{albumName}</span>
                <span className="fs-6">{artistName}</span>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
