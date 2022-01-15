import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [CommonModule, UserRoutingModule, SharedModule],
  exports: [],
  declarations: [UserDetailsComponent],
  providers: [],
})
export class UserModule {}
