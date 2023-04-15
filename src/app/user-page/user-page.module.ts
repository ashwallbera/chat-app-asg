import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { MainComponent } from './main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';


@NgModule({
  declarations: [
    MainComponent,
    ContactListComponent,
    ChatHistoryComponent,
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserPageModule { }
