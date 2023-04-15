import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  hide = true;
  username = new FormControl('',Validators.required)
  password = new FormControl('',Validators.required)
  
  constructor(private crudService: CrudService){

  }
  signup(){
    this.crudService.createAccount(
      this.username.value!,
      this.password.value!)
  }
}
