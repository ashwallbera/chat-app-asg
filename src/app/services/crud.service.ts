import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { initializeApp } from 'firebase/app';
import {
  child,
  get,
  getDatabase,
  ref,
  set,
  push,
  DataSnapshot,
  onValue,
  DatabaseReference,
} from 'firebase/database';
import { AccountModel } from '../model/account_model';
import { ChatModel } from '../model/chat_model';
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
      id: key + '',
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
    return get(child(dbRef, `users/`));
  }

  addContact(accountModel: AccountModel, currentAccountModel: AccountModel) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const key = push(ref(db, 'users/')).key;
    set(ref(db, 'users/' + currentAccountModel.id + '/contacts/' + key), {
      id: key + '',
      username: accountModel.username,
      password: accountModel.password,
    }).then(() => {
      // Data saved successfully!
    });

    set(ref(db, 'users/' + accountModel.id + '/contacts/' + key), {
      id: key + '',
      username: currentAccountModel.username,
      password: currentAccountModel.password,
    }).then(() => {
      // Data saved successfully!
    });
  }
  createConversation(userid1: string, userid2: string) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const key = push(ref(db, 'chats/')).key;

    var chatModel: ChatModel = {
      chatmembers: [userid1, userid2],
      id:key+''
    };
    // Data saved successfully!
    set(ref(db, 'chat/' + key), chatModel).then(() => {
      // Data saved successfully!
    });
  }
}
