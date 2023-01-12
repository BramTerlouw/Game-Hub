import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {

  userName?: string;

  @Input() chatData!: {
    username: string,
    message: string,
    timestamp: number,
  }

  currentUsername = 'marbwoulret';

  constructor(private auth: AuthService) { }

  ngOnInit() { 
    this.auth.getUser().then((user) => {this.userName = user.displayName});
  }

}
