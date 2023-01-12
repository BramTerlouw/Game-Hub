import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Message } from 'src/app/schematics/message';
import { Room } from 'src/app/schematics/room';

@Component({
  selector: 'app-c-chatroom',
  templateUrl: './c-chatroom.component.html',
  styleUrls: ['./c-chatroom.component.scss'],
})
export class CChatroomComponent implements OnInit {

  roomData: Room = { id: '1', creator: 'marbwoulret', participants: 2 };

  chat!: any;
  chatMessages?: Message[];

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages = () => {
    this.chatService.getMessages('rFYrksAgB3F824V7ffov').subscribe((res) => {
      this.chat = res;
      this.chatMessages = res.messages;
      
      this.roomData.id = res.id;
      this.roomData.creator = res.uid;
      this.roomData.participants = res.count;

      setTimeout(() => this.displayBottomDiv());
    })
  };

  sendMessage = (
    message: string) => {
    this.chatService.sendMessage('rFYrksAgB3F824V7ffov',message);
  }

  handleEmit(message: string) {
    this.sendMessage(message);
  }

  displayBottomDiv = () => {
    let element = document.getElementById('scroll');
    if (element) element.scrollTop = element.scrollHeight;
  }

}
