import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PhotosDetailsComponent } from './photos-details/photos-details.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  imports: [CommonModule, PhotosRoutingModule, SharedModule],
  exports: [],
  declarations: [PhotosDetailsComponent, PhotosListComponent],
  providers: [],
})
export class PhotosModule {}
