import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-main-menu',
  templateUrl: './option-main-menu.component.html',
  styleUrls: ['./option-main-menu.component.scss'],
})
export class OptionMainMenuComponent {

  @Input() theme: string = 'default';

  @Input() option: string = 'default';
  @Input() collapsed_option1: string = 'default';
  @Input() collapsed_option2: string = 'default';

  @Input() path1: string = '';
  @Input() path2: string = '';


  optionsCollapsed: boolean = true;

  constructor(
    private router: Router,
  ) { }

  navigateTo = (path: string) => {
    this.router.navigate([path]);
    this.optionsCollapsed = true;
  };

  collapseOptions = () => {
    this.optionsCollapsed = !this.optionsCollapsed;
  };
}
