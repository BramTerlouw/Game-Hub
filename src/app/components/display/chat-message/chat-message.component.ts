import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {

  @Input() chatData!: {
    username: string,
    message: string,
    timestamp: number,
  }

  currentUsername = 'marbwoulret';

  constructor() { }

  ngOnInit() { }

}
