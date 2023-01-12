import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Message } from 'src/app/schematics/message';
import { Room } from 'src/app/schematics/room';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-chatroom',
  templateUrl: './c-chatroom.component.html',
  styleUrls: ['./c-chatroom.component.scss'],
})
export class CChatroomComponent implements OnInit {

  roomData?: Room;
  chatMessages?: Message[];

  constructor(
    private chatService: ChatService, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getMessages();
  }



  /**
   * getMessages
   * * Method used to get messages from the chat room with chat ref from url.
   * 
   */
  getMessages = () => {
    this.chatService.getMessages(this.getUrlParam()).subscribe((res) => {
      this.chatMessages = res.messages;
      this.roomData = {...res };
      setTimeout(() => this.displayBottomDiv());
    })
  };



  /**
   * getUrlParam
   * * Method to get url parameter 'id'.
   * 
   * @returns The value of url query parameter 'id'.
   * 
   */
  getUrlParam = () => {
    return this.route.snapshot.paramMap.get('id') || '';
  };



  /**
   * sendMessage
   * * Method to send message to firebase.
   * 
   * @param message Paramater for message to send.
   */
  sendMessage = (message: string) => {
    this.chatService.sendMessage(this.getUrlParam(), message);
  }



  /**
   * handleEmit
   * * Method to handle emit from input component.
   * 
   * @param message Parameter with message coming from input component.
   * 
   */
  handleEmit(message: string) {
    this.sendMessage(message);
  }



  /**
   * displayBottomDiv
   * * Method to scroll to bottom of chat.
   * 
   */
  displayBottomDiv = () => {
    let element = document.getElementById('scroll');
    if (element) element.scrollTop = element.scrollHeight;
  }

}
