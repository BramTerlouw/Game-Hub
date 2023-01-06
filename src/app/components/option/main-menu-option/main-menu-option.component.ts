import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu-option',
  templateUrl: './main-menu-option.component.html',
  styleUrls: ['./main-menu-option.component.scss'],
})
export class MainMenuOptionComponent {

  @Input() option: string = 'default';
  @Input() theme: string = 'default';
  @Input() path: string = 'chat';

  constructor(
    private router: Router,
  ) { }

  navigateTo = (path: string) => {
    this.router.navigate([path]);
  };
}
