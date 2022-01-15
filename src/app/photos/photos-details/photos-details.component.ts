import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, take, tap } from 'rxjs';
import { Photo } from 'src/app/models/interfaces/photo';
import { PhotosHttpService } from 'src/app/services/photos-http.service';
@Component({
  selector: 'app-photos-details',
  templateUrl: './photos-details.component.html',
  styleUrls: ['./photos-details.component.sass'],
})
export class PhotosDetailsComponent implements OnInit {
  public photoDetails: Photo = {
    id: 0,
    albumId: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };
  public isLoading = false;
  private photoId: number = 0;
  constructor(
    private _route: ActivatedRoute,
    private _photosHttpService: PhotosHttpService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this._route.params
      .pipe(
        take(1),
        map((params) => {
          this.photoId = +params['id'];
          return +params['id'];
        }),
        tap((id) => {
          this._photosHttpService.getPhotosDetails(id).subscribe((res) => {
            this.photoDetails = res;
            this.isLoading = false;
          });
        })
      )
      .subscribe();
  }
}
