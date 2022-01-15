import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Post } from 'src/app/models/interfaces/post';
import { PostsHttpService } from 'src/app/services/posts-http.service';
import { SelectOption } from 'src/app/models/interfaces/select-option';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.sass'],
})
export class PostsListComponent implements OnInit {
  public initialPostsList: Post[];
  public postsList: Post[];
  public numberList: number[] = [];
  public selectOptions: SelectOption[] = [
    { optionName: 'User', value: 'userId' },
    { optionName: 'Title', value: 'title' },
  ];

  public postsListLength: number;
  public currentPage: number = 1;
  public pageOffset: number = 5;
  public pageCount: number;

  public isLoading = false;

  constructor(private _postsHttpService: PostsHttpService) {}

  ngOnInit() {
    this._getUsersList();
  }

  private _getUsersList() {
    this.isLoading = true;
    this._postsHttpService
      .getPosts()
      .pipe(
        tap((posts) => {
          this.postsList = posts;
          this.initialPostsList = this.postsList;

          this.postsList = this.initialPostsList.slice(0, this.pageOffset);

          this.isLoading = false;
        })
      )
      .subscribe();
  }

  public calculatePaginationPages() {
    this.pageCount = Math.ceil(this.postsList.length / this.pageOffset);
    for (let i = 1; i < this.pageCount; i++) {
      this.numberList.push(i);
    }

    this.numberList.push(this.pageCount);
  }

  public updateDataSource(data) {
    this.postsList = data.slice(0, this.pageOffset);
  }

  public sortDataByProperty(sortProperty) {
    this.postsList.sort((a, b) => (a[sortProperty] > b[sortProperty] ? 1 : -1));
  }

  public updateData(data) {
    this.postsList = data;
  }
}
