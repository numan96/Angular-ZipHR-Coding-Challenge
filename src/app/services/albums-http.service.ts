import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/interfaces/album';

@Injectable({
  providedIn: 'root',
})
export class AlbumsHttpService {
  constructor(private _httpClient: HttpClient) {}

  public getAlbums(): Observable<Album[]> {
    return this._httpClient.get<Album[]>(environment.baseUrl + 'albums');
  }

  public getAlbumsDetails(id: number): Observable<Album> {
    return this._httpClient.get<Album>(
      environment.baseUrl + 'albums' + '/' + id
    );
  }
}
