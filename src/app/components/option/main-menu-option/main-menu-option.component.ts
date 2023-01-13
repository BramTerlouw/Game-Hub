import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu-option',
  templateUrl: './main-menu-option.component.html',
  styleUrls: ['./main-menu-option.component.scss'],
})
export class MainMenuOptionComponent {

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
