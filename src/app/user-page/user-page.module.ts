import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { MatButtonModule } from '@angular/material/button';
import { AddContactDialogComponent } from './add-contact-dialog/add-contact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    MainComponent,
    ContactListComponent,
    ChatHistoryComponent,
    AddContactDialogComponent,
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
})
export class UserPageModule {}
