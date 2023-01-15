import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/schematics/card';
import { HeartsService } from '../../services/hearts.service';

@Component({
  selector: 'app-c-playing-field-hearts',
  templateUrl: './c-playing-field-hearts.component.html',
  styleUrls: ['./c-playing-field-hearts.component.scss'],
})
export class CPlayingFieldHeartsComponent implements OnInit {

  myHand!: Card[];

  constructor(private heartsService: HeartsService) { }

  ngOnInit() {}
}
