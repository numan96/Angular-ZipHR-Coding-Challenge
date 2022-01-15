import { Photo } from './photo';

export interface Album {
  id: number;
  userId: number;
  title: string;
  photos: Photo[];
}
