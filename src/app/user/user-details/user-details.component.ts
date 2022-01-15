import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, tap } from 'rxjs';
import { Album } from 'src/app/models/interfaces/album';
import { Post } from 'src/app/models/interfaces/post';
import { User } from 'src/app/models/interfaces/user';
import { AlbumsHttpService } from 'src/app/services/albums-http.service';
import { PostsHttpService } from 'src/app/services/posts-http.service';
import { UsersHttpService } from 'src/app/services/users-http.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass'],
})
export class UserDetailsComponent implements OnInit {
  public userDetails: User;
  public isLoading = false;
  private userId: string;
  constructor(
    private _route: ActivatedRoute,
    private _userHttpService: UsersHttpService,
    private _albumsHttpService: AlbumsHttpService,
    private _postsHttpService: PostsHttpService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.userId = this._route.snapshot.paramMap.get('id');
    concat(
      this._userHttpService.getUserDetails(this.userId).pipe(
        tap((userDetails) => {
          this.userDetails = userDetails;
        })
      ),
      this._postsHttpService.getPosts().pipe(
        tap((posts) => {
          this._filterPostsByUser(posts);
        })
      ),
      this._albumsHttpService.getAlbums().pipe(
        tap((albums) => {
          this._filterAlbumsByUser(albums);
          this.isLoading = false;
        })
      )
    ).subscribe();
  }

  private _filterPostsByUser(posts: Post[]) {
    this.userDetails.posts = posts.filter(
      (posts) => posts.userId === this.userDetails.id
    );
  }

  private _filterAlbumsByUser(albums: Album[]) {
    this.userDetails.albums = albums.filter(
      (albums) => albums.userId === this.userDetails.id
    );
  }
}
