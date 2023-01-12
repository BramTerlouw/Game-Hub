import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-input',
  templateUrl: './menu-input.component.html',
  styleUrls: ['./menu-input.component.scss'],
})
export class MenuInputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() inputName!: string;
  @Input() placeholder?: string;
  
  @Input() form!: FormGroup;
  @Input() control!: string;

  constructor() { }

  ngOnInit() {
    this.placeholder = this.placeholder + ' . . .';
  }

}
