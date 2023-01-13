import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-apply',
  templateUrl: './btn-apply.component.html',
  styleUrls: ['./btn-apply.component.scss'],
})
export class BtnApplyComponent implements OnInit {

  @Input() text!: string;

  constructor(private router: Router) { }

  ngOnInit() {}

  applySettings = () => {
    // TODO: Apply settings

    this.router.navigate(['home']);
  };

}
