import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-game-setting',
  templateUrl: './btn-game-setting.component.html',
  styleUrls: ['./btn-game-setting.component.scss'],
})
export class BtnGameSettingComponent implements OnInit {

  @Input() link?: string;
  @Input() icon!: string;
  @Input() width!: number;
  @Input() height!: number;
  @Input() verticalAlign?: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateTo = () => {
    this.router.navigate([this.link]);
  };

}
