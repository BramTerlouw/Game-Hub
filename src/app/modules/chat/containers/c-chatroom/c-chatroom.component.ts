import { Component, OnInit } from '@angular/core';
import { ChatService2 } from 'src/app/services/chat.service';
import { Message } from 'src/app/schematics/message';
import { Room } from 'src/app/schematics/room';

@Component({
  selector: 'app-c-chatroom',
  templateUrl: './c-chatroom.component.html',
  styleUrls: ['./c-chatroom.component.scss'],
})
export class CChatroomComponent implements OnInit {

  roomData: Room = { id: '1', creator: 'marbwoulret', participants: 2 };
  messages: Message[] = [];

  constructor(
    private chatService: ChatService2,
  ) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages = () => {
    this.chatService.getMessages().subscribe((res) => {
      this.messages = res;
      setTimeout(() => this.displayBottomDiv());
    })
  };

  sendMessage = (
    message: Message) => {
    this.chatService.createMessage(message);
  }

  handleEmit(message: string) {
    this.sendMessage({
      username: 'marbwoulret', 
      message: message, 
      timestamp: new Date().toISOString(),
    })
  }

  displayBottomDiv = () => {
    let element = document.getElementById('scroll');
    if (element) element.scrollTop = element.scrollHeight;
  }

}
