import { Row, Col } from "react-bootstrap";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AlbumGrid } from "./AlbumGrid";
import { AlbumForm } from "./AlbumForm";
import { AlbumList } from "./AlbumList";
import { Header } from "./Header";
import { SortPanel } from "./SortPanel";
import { useAlbums } from "../hooks/useAlbum";
import { useSort } from "../hooks/useSort";

export const Album = () => {
  const [sortBy, setSortBy] = useLocalStorage<string>("SORT_BY", "");
  const [isOnlyFavorite, setIsOnlyFavorite] = useLocalStorage<boolean>(
    "FAVORITE",
    false
  );
  const [isGrid, setIsGrid] = useLocalStorage<boolean>("GRID", true);

  const { albums, onCreateAlbum, onDeleteAlbum, onToggleToFavorite } =
    useAlbums();
  const { search, setSearch, sortedAlbums } = useSort(
    albums,
    sortBy,
    isOnlyFavorite
  );

  const onToggleLayout = () => {
    setIsGrid(!isGrid);
  };

  const onToggleFavorite = () => {
    setIsOnlyFavorite(!isOnlyFavorite);
  };

  return (
    <>
      <Header
        isGrid={isGrid}
        isFavourite={isOnlyFavorite}
        onLayout={onToggleLayout}
        onFavorite={onToggleFavorite}
      />
      <Row className="border mb-3">
        <Col md={3} className="mb-3">
          <AlbumForm onSubmit={onCreateAlbum} />
          <SortPanel
            query={search}
            sort={sortBy}
            setQuery={setSearch}
            setSort={setSortBy}
          />
        </Col>
        <Col md={9} className="mb-3 pt-3">
          {isGrid ? (
            <AlbumGrid
              albums={sortedAlbums}
              onDelete={onDeleteAlbum}
              onAddToFavorite={onToggleToFavorite}
            />
          ) : (
            <AlbumList
              albums={sortedAlbums}
              onDelete={onDeleteAlbum}
              onAddToFavorite={onToggleToFavorite}
            />
          )}
        </Col>
      </Row>
    </>
  );
};
