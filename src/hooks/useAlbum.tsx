import { toast } from "react-toastify";
import { Album, AlbumData } from "../types/album";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuidV4 } from "uuid";
import { useContext } from "react";
import { LangContext } from "../context/LanguageContext";

export const useAlbums = () => {
  const [albums, setAlbums] = useLocalStorage<Album[]>("ALBUMS", []);
  const {
    dispatch: { translate },
  } = useContext(LangContext);

  const onCreateAlbum = (data: AlbumData) => {
    setAlbums((prevAlbum) => {
      return [
        ...prevAlbum,
        {
          ...data,
          id: uuidV4(),
        },
      ];
    });
    toast.success(<p>{translate("toastSuccess")}</p>, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const onDeleteAlbum = (id: string) => {
    setAlbums((prevAlbum) => {
      return prevAlbum.filter((Album) => Album.id !== id);
    });
    toast.error(<p>{translate("toastDelete")}</p>, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const onToggleToFavorite = (id: string) => {
    setAlbums((prevAlbum) => {
      return prevAlbum.map((album) => {
        if (album.id === id) {
          return { ...album, isFavorite: !album.isFavorite };
        } else {
          return album;
        }
      });
    });
  };

  return {
    albums,
    setAlbums,
    onCreateAlbum,
    onDeleteAlbum,
    onToggleToFavorite,
  };
};
