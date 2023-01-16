import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/schematics/card';
import { HeartsService } from '../../services/hearts.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-c-playing-field-hearts',
  templateUrl: './c-playing-field-hearts.component.html',
  styleUrls: ['./c-playing-field-hearts.component.scss'],
})
export class CPlayingFieldHeartsComponent implements OnInit {

  myHand!: Card[];

  constructor(
    private route: ActivatedRoute,
    private heartsService: HeartsService,
    private authService: AuthService) { }

  ngOnInit() {
    this.heartsService.getGame(this.getUrlParam()).subscribe((game) => {
      this.authService.getUser().then((user) => {
        this.myHand = game.hands.find((hand: {uid: string; hand: Card[]}) => hand.uid === user.uid)?.hand || [];
      });
    });
  }



  /**
   * getUrlParam
   * * Method to get url parameter 'id'.
   * 
   * @returns The value of url query parameter 'id'.
   * 
   */
  getUrlParam = () => {
    return this.route.snapshot.paramMap.get('id') || '';
  };
}
