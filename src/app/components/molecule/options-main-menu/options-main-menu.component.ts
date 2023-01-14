import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-main-menu',
  templateUrl: './options-main-menu.component.html',
  styleUrls: ['./options-main-menu.component.scss'],
})
export class OptionsMainMenuComponent implements OnInit {

  optionCollapsed = false;
  optionSelected?: number;

  constructor(private el: ElementRef) { }

  ngOnInit() {}

  disableOptions = (indexToSkip: number) => {
    if (this.optionCollapsed) {
      this.optionSelected = undefined;
    } else {
      this.optionSelected = indexToSkip;
    }

    this.optionCollapsed = !this.optionCollapsed;
  };

}
