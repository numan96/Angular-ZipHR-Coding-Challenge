import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: ':id', component: PostsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
