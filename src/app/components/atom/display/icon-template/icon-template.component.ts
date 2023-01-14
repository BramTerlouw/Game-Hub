import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-template',
  templateUrl: './icon-template.component.html',
  styleUrls: ['./icon-template.component.scss'],
})
export class IconTemplateComponent implements OnInit {

  constructor() { }

  @Input() icon!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() size?: number;
  @Input() fill?: string;
  @Input() class?: string;
  @Input() stroke?: string;

  public ngOnInit(): void {
    if (!this.width || !this.height) {
      this.width = this.size;
      this.height = this.size;
    }
  }

}
