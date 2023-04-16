import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { AccountModel } from 'src/app/model/account_model';
import { CrudService } from 'src/app/services/crud.service';
import { environment } from 'src/environments/environment.development';
import { child, get, getDatabase, ref, set, push, DataSnapshot,onValue,DatabaseReference } from 'firebase/database';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  selectedUser: AccountModel | any;
  users: AccountModel[] = [
    { id: '1', username: '', password: '' },
    { id: '2', username: '', password: '' },
  ];
  constructor(public router: Router, private crudService: CrudService, public dialog: MatDialog) {
    this.getUserContacts();
  }

  ngOnInit() {}
  onSelect(user: AccountModel) {
    this.selectedUser = user;
    this.router.navigate(['/chat', user.id]);
  }

  getUserContacts(){
    var user: AccountModel = JSON.parse(""+localStorage.getItem('asgaccount'));
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const reference = ref(db, 'users/'+user.id);

    onValue(reference,(snap)=>{
      console.log(snap.val())
      this.users.splice(0,this.users.length)
      snap.child('contacts').forEach((contact)=>{
        this.users.push(contact.val())
      });
    })
  }
  addContact(){
    var user: AccountModel = JSON.parse(""+localStorage.getItem('asgaccount'));
    this.dialog.open(AddContactDialogComponent,{
      data:user
    });
    
  }

  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }
}
