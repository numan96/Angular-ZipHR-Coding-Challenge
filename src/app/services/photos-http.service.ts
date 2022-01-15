import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/interfaces/photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosHttpService {
  constructor(private _httpClient: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    return this._httpClient.get<Photo[]>(environment.baseUrl + 'photos');
  }

  public getPhotosDetails(id: number): Observable<Photo> {
    return this._httpClient.get<Photo>(
      environment.baseUrl + 'photos' + '/' + id
    );
  }
}
