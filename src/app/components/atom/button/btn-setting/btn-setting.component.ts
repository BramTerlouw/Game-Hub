import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-setting',
  templateUrl: './btn-setting.component.html',
  styleUrls: ['./btn-setting.component.scss'],
})
export class BtnSettingComponent implements OnInit {

  @Input() icon!: string;

  constructor() { }

  ngOnInit() {}

}
