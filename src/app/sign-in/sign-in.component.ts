import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  hide = true;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  constructor(public router: Router, private crudService: CrudService) {}

  signin() {
    // console.log(this.username.value);
    // console.log(this.password.value);
    console.log(
      this.crudService
        .verifyUser(this.username.value!, this.password.value!)
        .then((snap) => {
          snap.forEach((child) => {
            console.log(child.val());
            if (child.val().username == this.username.value!) {
              //USER EXIST
              if (child.val().password == this.password.value!) {
                this.router.navigate(['/user'])
                //localStorage.setItem("abtsaccount",JSON.stringify(user))
              }
            } else {
              console.log('No data available');
            }
          });
        })
        .catch((error) => {
          console.error(error);
        })
    );
  }
}
