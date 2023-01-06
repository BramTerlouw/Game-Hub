import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss'],
})
export class ChatInputComponent implements OnInit {

  @Input() inputName!: string;

  constructor() { }

  ngOnInit() { }

}
