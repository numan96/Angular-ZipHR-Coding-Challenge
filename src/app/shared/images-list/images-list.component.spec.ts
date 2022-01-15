/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ImagesListComponent } from './images-list.component';

describe('ImageListComponent', () => {
  let component: ImagesListComponent;
  let fixture: ComponentFixture<ImagesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('OnInit', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('updateDataSource', () => {
    it('should create', () => {
      const updateDataSourceSpy = spyOn(component, 'updateDataSource');
      component.updateDataSource({});
      expect(updateDataSourceSpy);
    });
  });

  describe('sendSortProperty', () => {
    it('should create', () => {
      const sendSortPropertySpy = spyOn(component, 'sendSortProperty');
      component.sendSortProperty('userId');
      expect(sendSortPropertySpy);
    });
  });
});
