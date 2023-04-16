import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue, child } from 'firebase/database';
import { AccountModel } from 'src/app/model/account_model';
import { CrudService } from 'src/app/services/crud.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss'],
})
export class AddContactDialogComponent {
  users: AccountModel[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AccountModel,
    private crudService: CrudService
  ) {
    console.log(data);
    this.readUser();
  }

  readUser() {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const reference = ref(db, 'users/');
    onValue(reference, (snap) => {
      this.users.splice(0, this.users.length);
      snap.forEach((child) => {
        if (child.val().id != this.data.id) {
          this.users.push(child.val());
        }
      });
    });
  }

  addContact(accountModel: AccountModel) {
    this.crudService.addContact(accountModel,this.data);
    this.crudService.createConversation(this.data.id,accountModel.id)
  }
}
