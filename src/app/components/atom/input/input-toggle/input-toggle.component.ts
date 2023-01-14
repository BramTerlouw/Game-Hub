import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-toggle',
  templateUrl: './input-toggle.component.html',
  styleUrls: ['./input-toggle.component.scss'],
})
export class InputToggleComponent implements OnInit {

  @Input() value: boolean = true;

  constructor() { }

  ngOnInit() {}

}
