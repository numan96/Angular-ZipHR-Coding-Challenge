import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosDetailsComponent } from './photos-details/photos-details.component';
import { PhotosListComponent } from './photos-list/photos-list.component';

const routes: Routes = [
  { path: '', component: PhotosListComponent },
  { path: ':id', component: PhotosDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
