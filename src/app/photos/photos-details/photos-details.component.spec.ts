/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhotosDetailsComponent } from './photos-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PhotosDetailsComponent', () => {
  let component: PhotosDetailsComponent;
  let fixture: ComponentFixture<PhotosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
