import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-panel',
  templateUrl: './btn-panel.component.html',
  styleUrls: ['./btn-panel.component.scss'],
})
export class BtnPanelComponent implements OnInit {

  @Input() text: string = 'default';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() flat: boolean = false;

  constructor() { }

  ngOnInit() { }

}
