export interface Album extends AlbumData {
  id: string;
}

export interface AlbumData {
  albumName: string;
  artistName: string;
  createDate: string;
  isFavorite: boolean;
}
