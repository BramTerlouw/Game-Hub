import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-input',
  templateUrl: './menu-input.component.html',
  styleUrls: ['./menu-input.component.scss'],
})
export class MenuInputComponent implements OnInit {

  @Input() inputName!: string;
  @Input() placeholder!: string;

  constructor() { }

  ngOnInit() {
    this.placeholder = 'Username'
    this.placeholder = this.placeholder + ' . . .';
  }

}
