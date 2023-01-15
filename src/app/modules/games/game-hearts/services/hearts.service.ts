import { Injectable } from '@angular/core';
import { Card } from 'src/app/schematics/card';
import { CardService } from 'src/app/services/card.service';

@Injectable({
  providedIn: 'root'
})
export class HeartsService {

  deck!: Card[];
  hands!: Array<Card[]>;

  constructor(private cardService: CardService) { }



  /**
   * initGame
   * * Method to initialize a new game of hearts.
   * 
   */
  initGame = () => {
    this.deck = this.cardService.createDeck();
    this.deck = this.cardService.shuffleDeck(this.deck);
    this.hands = this.cardService.dealCountHands(this.deck, 4);

    // TODO: Create a new game in firebase with deck and hand data.
  };



  /**
   * joinGame
   * * Method to join an existing game of hearts.
   * 
   */
  joinGame = () => {
    // TODO: Get game data from firebase and join a game.
  };
}
