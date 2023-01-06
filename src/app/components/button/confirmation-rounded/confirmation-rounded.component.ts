import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-rounded',
  templateUrl: './confirmation-rounded.component.html',
  styleUrls: ['./confirmation-rounded.component.scss'],
})
export class ConfirmationRoundedComponent implements OnInit {

  @Input() text: string = 'default';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() flat: boolean = false;

  constructor() { }

  ngOnInit() { }

}
