import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass'],
})
export class PaginatorComponent implements OnInit {
  @Output() updateData = new EventEmitter<any>();
  @Input() $calculatePages: BehaviorSubject<any>;
  @Input() pageOffset: number;
  @Input() data: any[] = [];
  @Input() initialData: any[] = [];

  public numberList: number[] = [];
  public postsListLength: number;
  public currentPage: number = 1;
  public updatedData: any;

  public pageCount: number;
  constructor(private _router: Router) {}

  ngOnInit() {
    this.calculatePaginationPages();
  }

  public calculatePaginationPages() {
    if (this.updatedData) {
      this.pageCount = Math.ceil(this.updatedData.length / this.pageOffset);
    } else {
      this.pageCount = Math.ceil(this.initialData.length / this.pageOffset);
    }

    this.numberList = [];
    for (let i = 1; i < this.pageCount; i++) {
      this.numberList.push(i);
    }

    this.numberList.push(this.pageCount);
  }

  public previousOrNext(pageDirection: string) {
    if (pageDirection === 'previous' && this.currentPage !== 1) {
      this.loadPage(this.currentPage - 1);
    } else if (pageDirection === 'next' && this.currentPage < this.pageCount) {
      this.loadPage(this.currentPage + 1);
    }
  }

  public loadPage(currentPage) {
    this.currentPage = currentPage;

    const start = (this.currentPage - 1) * this.pageOffset;
    const end = this.currentPage * this.pageOffset;
    if (this.updatedData) {
      this.updateData.emit(this.updatedData);
    } else {
      this.updateData.emit(this.initialData.slice(start, end));
    }

    this._router.navigate([this._router.url.split('?')[0]], {
      queryParams: { page: currentPage },
    });
  }
}
