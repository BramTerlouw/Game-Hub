import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-menu',
  templateUrl: './input-menu.component.html',
  styleUrls: ['./input-menu.component.scss'],
})
export class InputMenuComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() inputName!: string;
  @Input() placeholder?: string;
  
  @Input() form!: FormGroup;
  @Input() control!: string;
  @Input() errorMessage!: string;

  constructor() { }

  ngOnInit() {
    this.placeholder = this.placeholder + ' . . .';
  }

}
