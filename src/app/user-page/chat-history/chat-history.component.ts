import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss'],
})
export class ChatHistoryComponent implements OnInit {
  userID: string | any;
  ngOnInit() {}
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.userID = params['id']
    );
  }
}
