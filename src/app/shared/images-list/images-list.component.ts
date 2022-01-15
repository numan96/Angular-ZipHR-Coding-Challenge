import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from 'src/app/models/interfaces/photo';
import { SelectOption } from 'src/app/models/interfaces/select-option';
@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.sass'],
})
export class ImagesListComponent implements OnInit {
  @Output() sortProperty = new EventEmitter<string>();
  @Output() updateData = new EventEmitter<any>();
  @Input() imagesList: Photo[] = [];
  @Input() initialImagesList: Photo[] = [];
  @Input() selectOptions: SelectOption[];
  @Input() currentPage?: string = '';
  @Input() pageOffset?: number;
  @Input() isLoading = false;

  constructor() {}

  ngOnInit() {}

  public updateDataSource(data) {
    this.updateData.emit(data);
  }

  public sendSortProperty(sortProperty: string) {
    this.sortProperty.emit(sortProperty);
  }
}
