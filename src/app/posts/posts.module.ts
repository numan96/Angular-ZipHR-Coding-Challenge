import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  exports: [],
  declarations: [PostsDetailsComponent, PostsListComponent],
  providers: [],
})
export class PostsModule {}
