import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages = [
    {
      username: 'marbwoulret',
      message: 'Hello guys! Ready to play a game?',
      timestamp: '12:00:00',
    },
    {
      username: 'leroy072',
      message: 'Howdy boys, lets get this bread shall we?',
      timestamp: '12:00:20',
    }
  ];

  constructor() { }

  fetchRoom = () => {
    return {
      id: '0001',
      creator: 'Bram Terlouw',
      participants: 4,
    }
  }

  fetchMessages = () => {
    return this.messages;
  };

  sendMessage = (
    message: { username: string; message: string; timestamp: string; }) => { 
    this.messages.push(message);
  };
}
