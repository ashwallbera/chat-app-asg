import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { initializeApp } from 'firebase/app';
import { child, get, getDatabase, ref, set, push, DataSnapshot } from 'firebase/database';
import { AccountModel } from '../model/account_model';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor() {}

  createAccount(username: string, password: string) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const key = push(ref(db, 'users/')).key;
    set(ref(db, 'users/' + key), {
      id: key+'',
      username: username,
      password: password,
    }).then(() => {
      // Data saved successfully!
      window.location.href = 'signin'; // redirect to signin page
    });
  }

  verifyUser(username: string, password: string): Promise<DataSnapshot> {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();

    const dbRef = ref(getDatabase());
    return get(child(dbRef, `users/`))
  }
}
