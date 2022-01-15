import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concat, map, take, tap } from 'rxjs';
import { Post } from 'src/app/models/interfaces/post';
import { PostsHttpService } from 'src/app/services/posts-http.service';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.sass'],
})
export class PostsDetailsComponent implements OnInit {
  public postDetails: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  public isLoading = false;
  public bodyArray: any;
  private userId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private _postsHttpService: PostsHttpService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    concat(
      this.route.params.pipe(
        take(1),
        map((params) => {
          this.userId = +params['id'];
          return +params['id'];
        }),
        tap((id) => {
          this._postsHttpService.getPostsDetails(id).subscribe((res) => {
            this.postDetails = res;
            this.bodyArray = this.postDetails.body.split('\n');
            this.isLoading = false;
          });
        })
      )
    ).subscribe();
  }
}
