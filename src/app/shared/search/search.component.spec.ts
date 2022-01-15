/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SearchComponent } from './search.component';
import { FormGroup, FormControl } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('OnInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
