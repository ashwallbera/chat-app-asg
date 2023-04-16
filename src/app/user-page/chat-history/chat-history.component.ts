import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { initializeApp } from 'firebase/app';
import {
  child,
  get,
  getDatabase,
  onValue,
  push,
  ref,
  set,
} from 'firebase/database';
import { AccountModel } from 'src/app/model/account_model';
import { environment } from 'src/environments/environment.development';
import { MessageModel } from 'src/app/model/message_model';
@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss'],
})
export class ChatHistoryComponent implements OnInit {
  message = new FormControl('', [Validators.required]);
  userID: string | any;
  messages: MessageModel[] = [];
  ngOnInit() {}
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.userID = params['id']));
    this.readchat();
  }

  sendMessage() {
    var user: AccountModel = JSON.parse(
      '' + localStorage.getItem('asgaccount')
    );
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();

    var message: MessageModel = {
      sentby: '' + user.id,
      message: '' + this.message.value!,
      date: '' + new Date().toLocaleDateString(),
      time: '' + new Date().toLocaleTimeString(),
    };

    const dbRef = ref(getDatabase());
    get(child(dbRef, 'chat/'))
      .then((snapshot) => {
        console.log(snapshot.val());
        snapshot.forEach((chat) => {
          var members: [] = chat.val().chatmembers;
          members.forEach((member) => {
            if (member == user.id) {
              const key = push(
                ref(db, 'chat/' + chat.val().id + '/messages')
              ).key;
              set(
                ref(db, 'chat/' + chat.val().id + '/messages/' + key),
                message
              ).then(() => {
                // Data saved successfully!
                this.message.setValue('');
              });
            }
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  readchat() {
    var user: AccountModel = JSON.parse(
      '' + localStorage.getItem('asgaccount')
    );
    const app = initializeApp(environment.firebaseConfig);
    const db = getDatabase();
    const reference = ref(db, 'chat');

    const dbRef = ref(getDatabase());
    get(child(dbRef, `chat/`))
      .then((snapshot) => {
        snapshot.forEach((chat) => {
          var members: [] = chat.val().chatmembers;
          members.forEach((member) => {
            console.log('asdas');
            if (member == user.id) {
              console.log('asdas1');

              onValue(reference, (snap) => {
                this.messages.splice(0,this.messages.length)
                snap.forEach((child) => {
                  child.child('messages').forEach((message) => {
                    this.messages.push(message.val());
                    console.log(message.val());
                  });
                });
              });
              return;
            }
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  isCurrentUser(sentby: string) : boolean{
    var user: AccountModel = JSON.parse(
      '' + localStorage.getItem('asgaccount')
    );

    if(user.id == sentby){
      return true
    }
    return false;
  }
}
