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
  
  uid!: string;
  myHand!: Card[];

  currentPlayer?: string;
  
  constructor(
    private route: ActivatedRoute,
    private heartsService: HeartsService,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()
      .then((user) => this.uid = user.uid)
      .then(() => this.heartsService.getHand(this.getUrlParam(), this.uid)
      .then((hand) => {this.myHand = hand}));

    this.heartsService.getGame(this.getUrlParam()).subscribe((game) => {
      this.currentPlayer = game.currentPlayer; /** -->> Get and set the current player */
      // ... /** -->> Get .... */
      // ... /** -->> Get .... */
      // ... /** -->> Get .... */
      // ... /** -->> Get .... */
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
