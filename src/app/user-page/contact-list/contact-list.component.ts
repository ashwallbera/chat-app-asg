import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/model/account_model';

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
  constructor(public router: Router) {}

  ngOnInit() {}
  onSelect(user: AccountModel) {
    this.selectedUser = user;
    this.router.navigate(['/chat', user.id]);
  }
}
