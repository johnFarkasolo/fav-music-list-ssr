import { useState, useMemo } from "react";
import { Album } from "../types/album";

export const useSort = (
  albums: Album[],
  sortKey: string,
  onlyFavorite: boolean
) => {
  const [search, setSearch] = useState("");
  const searchLower = search.toLowerCase();

  const filteredAlbums = useMemo(() => {
    return albums
      .filter(
        (album) =>
          search === "" || album.albumName.toLowerCase().includes(searchLower)
      )
      .filter((album) => (onlyFavorite ? album.isFavorite : true));
  }, [searchLower, albums, onlyFavorite]);

  const sortedAlbums = useMemo(() => {
    let sorted: Album[];

    switch (sortKey) {
      case "id":
      case "albumName":
      case "artistName":
      case "createDate":
        sorted = filteredAlbums.sort((a, b) =>
          a[sortKey].localeCompare(b[sortKey])
        );
        break;
      default:
        sorted = filteredAlbums;
        break;
    }

    return sorted;
  }, [sortKey, filteredAlbums]);

  return {
    search,
    setSearch,
    sortedAlbums,
  };
};
