import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, concat, map, tap } from 'rxjs';
import { Album } from 'src/app/models/interfaces/album';
import { Photo } from 'src/app/models/interfaces/photo';
import { AlbumsHttpService } from 'src/app/services/albums-http.service';
import { PhotosHttpService } from 'src/app/services/photos-http.service';
import { SelectOption } from 'src/app/models/interfaces/select-option';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.sass'],
})
export class AlbumsListComponent implements OnInit {
  public albumList: Album[];
  public initialAlbumList: Album[];
  public photosList: Photo[];
  public selectOptions: SelectOption[] = [
    { optionName: 'Albums', value: 'title' },
    { optionName: 'User', value: 'userId' },
  ];
  public isLoading = false;
  public pageOffset = 8;

  public $calculatePages: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private _albumsHttpService: AlbumsHttpService,
    private _photosHttpService: PhotosHttpService
  ) {}

  ngOnInit(): void {
    this._getAlbumsList();
  }

  private _getAlbumsList() {
    this.isLoading = true;
    concat(
      this._photosHttpService.getPhotos().pipe(
        tap((photos) => {
          this.photosList = photos;
        })
      ),
      this._albumsHttpService.getAlbums().pipe(
        map((albums) => this._filterPhotosByAlbum(albums)),
        tap((albums) => {
          this.albumList = albums;
          this.initialAlbumList = this.albumList;

          this.albumList = this.initialAlbumList.slice(0, this.pageOffset);

          this.isLoading = false;
        })
      )
    ).subscribe();
  }

  private _filterPhotosByAlbum(albums: Album[]) {
    albums.forEach((album) => {
      album.photos = this.photosList.filter(
        (photo) => photo.albumId === album.id
      );
    });
    return albums;
  }

  public sortDataByProperty(event: any) {
    this.albumList.sort((a, b) => (a[event] < b[event] ? 1 : -1));
  }

  public updateData(data) {
    console.log('DATA:', data);
    this.albumList = data.slice(0, this.pageOffset);
    this.$calculatePages.next(data);
  }
}
