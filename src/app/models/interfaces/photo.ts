export interface Photo {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export function filterPhotosByAlbum(photos: Photo[], currentId: number) {
  return photos.filter((photo) => photo.albumId === currentId);
}
