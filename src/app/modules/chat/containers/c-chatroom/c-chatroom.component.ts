import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-c-chatroom',
  templateUrl: './c-chatroom.component.html',
  styleUrls: ['./c-chatroom.component.scss'],
})
export class CChatroomComponent implements OnInit {

  roomData!: {
    id: string,
    creator: string,
    participants: number
  };

  messages: {
    username: string,
    message: string,
    timestamp: string,
  }[] = [];

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit() {
    this.roomData = this.chatService.fetchRoom();
    this.messages = this.chatService.fetchMessages();
  }

}
