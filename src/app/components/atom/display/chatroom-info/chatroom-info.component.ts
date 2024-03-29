import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-info',
  templateUrl: './chatroom-info.component.html',
  styleUrls: ['./chatroom-info.component.scss'],
})
export class ChatroomInfoComponent implements OnInit {

  @Input() id?: string;
  @Input() creator?: string;

  public date: string = new Date().toDateString();
  public time: string = new Date().toLocaleTimeString();
  public isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  collapseData = () => {
    this.isCollapsed = !this.isCollapsed;
  };

}
