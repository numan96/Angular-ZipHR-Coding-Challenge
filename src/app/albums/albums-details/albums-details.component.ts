import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, map, take, tap } from 'rxjs';
import { Album } from 'src/app/models/interfaces/album';
import { filterPhotosByAlbum, Photo } from 'src/app/models/interfaces/photo';
import { AlbumsHttpService } from 'src/app/services/albums-http.service';
import { PhotosHttpService } from 'src/app/services/photos-http.service';
import { SelectOption } from 'src/app/models/interfaces/select-option';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrls: ['./albums-details.component.sass'],
})
export class AlbumsDetailsComponent implements OnInit {
  public albumDetails: Album = {
    id: 0,
    userId: 0,
    title: '',
    photos: [],
  };
  public isLoading = false;
  public imagesList: Photo[];
  public initialImagesList: Photo[];
  public currentPage: string = '';
  public pageOffset = 10;
  public selectOptions: SelectOption[] = [
    {
      optionName: 'Title',
      value: 'title',
    },
  ];
  private albumId: number = 0;

  constructor(
    private _route: ActivatedRoute,
    private _albumHttpService: AlbumsHttpService,
    private _photosHttpService: PhotosHttpService
  ) {}

  ngOnInit() {
    this.isLoading = true;

    concat(
      this._route.params.pipe(
        take(1),
        map((params) => {
          this.albumId = +params['id'];
          return +params['id'];
        }),
        tap((id) => {
          this._albumHttpService.getAlbumsDetails(id).subscribe((res) => {
            this.albumDetails = res;
            this.isLoading = false;
          });
        })
      ),
      this._photosHttpService.getPhotos().pipe(
        map((photos) => filterPhotosByAlbum(photos, this.albumId)),
        tap((photos) => {
          this.imagesList = photos;
          this.initialImagesList = this.imagesList;

          this.imagesList = this.initialImagesList.slice(0, this.pageOffset);
          this.isLoading = false;
        })
      )
    ).subscribe();
  }

  public updateDataSource(data) {
    this.imagesList = data.slice(0, this.pageOffset);
  }

  public sortDataByProperty(sortProperty) {
    this.imagesList.sort((a, b) =>
      a[sortProperty] > b[sortProperty] ? 1 : -1
    );
  }
}
