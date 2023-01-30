import { useState, useMemo } from "react";
import { Album } from "../types/album";

export const useSort = (
  albums: Album[],
  sortKey: string,
  onlyFavorite: boolean
) => {
  const [search, setSearch] = useState<string>("");

  const filteredAlbums = useMemo(() => {
    return albums
      .filter((album) => {
        return (
          search === "" ||
          album.albumName.toLowerCase().includes(search.toLowerCase())
        );
      })
      .filter((album) => (onlyFavorite ? album.isFavorite : true));
  }, [search, albums, onlyFavorite, sortKey]);

  const sortedAlbums = useMemo(() => {
    let sortedCopy: Album[];

    switch (sortKey) {
      case "id":
      case "albumName":
      case "artistName":
      case "createDate":
        sortedCopy = [...filteredAlbums].sort((a, b) => {
          return a[sortKey].localeCompare(b[sortKey]);
        });
        break;
      default:
        sortedCopy = filteredAlbums;
        break;
    }

    return sortedCopy;
  }, [sortKey, search, albums, onlyFavorite]);

  return {
    search,
    setSearch,
    sortedAlbums,
  };
};
