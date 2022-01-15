import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { SelectOption } from 'src/app/models/interfaces/select-option';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  @Output() sortProperty = new EventEmitter<string>();
  @Output() searchValues = new EventEmitter<any>();
  @Input() placeholder: string = '';
  @Input() initialValues: any;
  @Input() values: any;
  @Input() selectOptions: SelectOption[];

  public isLoading = false;

  public searchForm: FormGroup = new FormGroup({
    search: new FormControl(),
    filterSelect: new FormControl(),
  });

  constructor() {}

  ngOnInit() {
    this.searchForm.controls['search'].valueChanges
      .pipe(
        tap((value: string) => {
          const filteredValues = this.initialValues.filter((valueTest) => {
            return valueTest.title.includes(value);
          });
          this.searchValues.emit(filteredValues);
        })
      )
      .subscribe();
  }

  public sortDataByProperty(event: any) {
    this.sortProperty.emit(event.target.value);
  }

  public outputSearchTitle(searchTitle: string) {
    this.placeholder =
      'Search ' +
      this.selectOptions.find(
        (selectOption) => selectOption.value === searchTitle
      ).optionName;
  }
}
