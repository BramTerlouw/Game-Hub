import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-toggle',
  templateUrl: './setting-toggle.component.html',
  styleUrls: ['./setting-toggle.component.scss'],
})
export class SettingToggleComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;

  @Input() name!: string;
  @Input() value: boolean = true;

  constructor() { }

  ngOnInit() {}

}
