import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option-main-menu',
  templateUrl: './option-main-menu.component.html',
  styleUrls: ['./option-main-menu.component.scss'],
})
export class OptionMainMenuComponent {

  @Input() index!: number;
  @Input() theme: string = 'default';
  @Input() disabled: boolean = false;

  @Input() option: string = 'default';
  @Input() collapsed_option1: string = 'default';
  @Input() collapsed_option2: string = 'default';

  @Input() path1: string = '';
  @Input() path2: string = '';

  @Output() emitCollapse = new EventEmitter<number>();
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
    this.emitCollapse.emit(this.index);
  };
}
