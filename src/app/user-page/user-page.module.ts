import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { MainComponent } from './main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserPageModule { }
