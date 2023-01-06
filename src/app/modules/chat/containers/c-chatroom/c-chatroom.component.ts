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

  sendMessage = (
    message: { username: string; message: string; timestamp: string; }) => {
    this.chatService.sendMessage(message);
  }

  handleMessage(message: string) {
    this.sendMessage({
      username: 'marbwoulret', 
      message: message, 
      timestamp: '12:00:00'
    })
  }

}
