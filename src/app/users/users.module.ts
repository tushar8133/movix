import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
