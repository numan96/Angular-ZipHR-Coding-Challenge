import { Component, OnInit } from '@angular/core';
import { concat, tap } from 'rxjs';
import { Photo } from '../models/interfaces/photo';
import { Post } from '../models/interfaces/post';
import { AlbumsHttpService } from '../services/albums-http.service';
import { PhotosHttpService } from '../services/photos-http.service';
import { PostsHttpService } from '../services/posts-http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  public postsTotal: number = 0;
  public albumsTotal: number = 0;
  public photosTotal: number = 0;
  public latestPhotos: Photo[] = [];
  public latestPosts: Post[] = [];
  public isLoading = false;

  constructor(
    private _albumsHttpService: AlbumsHttpService,
    private _photosHttpService: PhotosHttpService,
    private _postsHttpService: PostsHttpService
  ) {}

  ngOnInit() {
    this._getStats();
  }
  private _getStats() {
    this.isLoading = true;
    concat(
      this._postsHttpService.getPosts().pipe(
        tap((posts) => {
          this.postsTotal = Object.keys(posts).length;
          this.latestPosts = posts;
        })
      ),
      this._albumsHttpService.getAlbums().pipe(
        tap((albums) => {
          this.albumsTotal = Object.keys(albums).length;
        })
      ),
      this._photosHttpService.getPhotos().pipe(
        tap((photos) => {
          this.photosTotal = Object.keys(photos).length;
          this.latestPhotos = photos;
          this.isLoading = false;
        })
      )
    ).subscribe();
  }
}
