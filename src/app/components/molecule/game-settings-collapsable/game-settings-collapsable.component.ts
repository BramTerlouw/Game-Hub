import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-settings-collapsable',
  templateUrl: './game-settings-collapsable.component.html',
  styleUrls: ['./game-settings-collapsable.component.scss'],
})
export class GameSettingsCollapsableComponent implements OnInit {

  isCollapsed = true;

  constructor() { }

  ngOnInit() {}

  toggleCollapse = () => {
    this.isCollapsed = !this.isCollapsed;
  };

}
