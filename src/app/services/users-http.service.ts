import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  constructor(private _httpClient: HttpClient) {}

  public getUserDetails(id: string): Observable<User> {
    return this._httpClient.get<User>(environment.baseUrl + 'users' + '/' + id);
  }
}
