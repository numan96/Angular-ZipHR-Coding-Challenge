import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';

const routes: Routes = [
  { path: '', component: AlbumsListComponent },
  { path: ':id', component: AlbumsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumsRoutingModule {}
