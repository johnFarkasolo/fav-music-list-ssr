import { Card, Stack, Button, Row, Col } from "react-bootstrap";
import { HeartIcon, TrashIcon } from "../assets/icons";
import { Album } from "../types/album";
import { textEllipsis } from "../utils/string";
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
  if (!albums.length) {
    return <EmptyData />;
  }

  return (
    <Row xs={1} sm={2} lg={3} xl={4} className="g-3">
      {albums.map(({ id, albumName, artistName, createDate, isFavorite }) => (
        <Col key={id}>
          <Card className="h-100 text-reset text-decoration-none card">
            <Card.Header className="d-flex justify-content-between">
              <Button variant="light" onClick={() => onAddToFavorite(id)}>
                <HeartIcon fill={isFavorite ? "red" : "none"} />
              </Button>
              <Button variant="light" onClick={() => onDelete(id)}>
                <TrashIcon color="black" />
              </Button>
            </Card.Header>
            <Card.Body>
              <Stack
                gap={2}
                className="align-items-center justify-content-center h-100"
              >
                <span className="fs-8">{createDate}</span>
                <span className="fs-3">{textEllipsis(albumName, 12)}</span>
                <span className="fs-6">{textEllipsis(artistName, 12)}</span>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
