import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsHttpService {
  constructor(private _httpClient: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(environment.baseUrl + 'posts');
  }

  public getPostsDetails(id: number): Observable<Post> {
    return this._httpClient.get<Post>(environment.baseUrl + 'posts' + '/' + id);
  }
}
