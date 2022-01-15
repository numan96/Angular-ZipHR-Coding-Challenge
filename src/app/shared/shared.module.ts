import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImagesListComponent } from './images-list/images-list.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    SidebarComponent,
    SearchComponent,
    ImagesListComponent,
    LoadingSpinnerComponent,
    PaginatorComponent,
  ],
  declarations: [
    SidebarComponent,
    SearchComponent,
    ImagesListComponent,
    LoadingSpinnerComponent,
    PaginatorComponent,
  ],
  providers: [],
})
export class SharedModule {}
