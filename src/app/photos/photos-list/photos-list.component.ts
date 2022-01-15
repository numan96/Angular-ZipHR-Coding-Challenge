import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Photo } from 'src/app/models/interfaces/photo';
import { SelectOption } from 'src/app/models/interfaces/select-option';
import { PhotosHttpService } from 'src/app/services/photos-http.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.sass'],
})
export class PhotosListComponent implements OnInit {
  public isLoading = false;
  public imagesList: Photo[];
  public initialImagesList: Photo[];
  public currentPage: string = '';
  public pageOffset = 12;
  public selectOptions: SelectOption[] = [
    {
      optionName: 'Title',
      value: 'title',
    },
  ];

  constructor(
    private _photosHttpService: PhotosHttpService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.currentPage = this._router.url;
    this._photosHttpService
      .getPhotos()
      .pipe(
        map((photos) => photos.slice(0, 200)),
        tap((photos) => {
          this.imagesList = photos;
          this.initialImagesList = this.imagesList;

          this.imagesList = this.initialImagesList.slice(0, this.pageOffset);
          this.isLoading = false;
        })
      )
      .subscribe();
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
