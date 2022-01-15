import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  imports: [CommonModule, AlbumsRoutingModule, SharedModule],
  exports: [],
  declarations: [AlbumsDetailsComponent, AlbumsListComponent],
  providers: [],
})
export class AlbumsModule {}
