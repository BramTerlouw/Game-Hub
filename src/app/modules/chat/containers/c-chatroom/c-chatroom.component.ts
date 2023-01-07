import { Component, OnInit } from '@angular/core';
import { ChatService2 } from 'src/app/services/chat.service';

@Component({
  selector: 'app-c-chatroom',
  templateUrl: './c-chatroom.component.html',
  styleUrls: ['./c-chatroom.component.scss'],
})
export class CChatroomComponent implements OnInit {

  roomData: {
    id: string,
    creator: string,
    participants: number
  } = {
    id: '1',
    creator: 'marbwoulret',
    participants: 2
  };

  messages: {
    username: any,
    message: any,
    timestamp: any,
  }[] = [];

  constructor(
    private chatService: ChatService2,
  ) { }

  ngOnInit() {
    this.chatService.getMessages().then((res) => {
      this.messages.push(...res);
    })
  }

  sendMessage = (
    message: { username: string; message: string; timestamp: string; }) => {
    this.chatService.createMessage(message);
  }

  handleMessage(message: string) {
    this.sendMessage({
      username: 'marbwoulret', 
      message: message, 
      timestamp: '12:00:00'
    })
  }

}
