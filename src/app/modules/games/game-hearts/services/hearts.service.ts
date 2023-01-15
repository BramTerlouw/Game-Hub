import { Injectable } from '@angular/core';
import { Card } from 'src/app/schematics/card';
import { CardService } from 'src/app/services/card.service';

@Injectable({
  providedIn: 'root'
})
export class HeartsService {

  deck!: Card[];
  hands!: Array<Card[]>;

  currentRound!: Array<{uid: string; card: Card}>

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
   * dbInitGame
   * * Method to initialize a new game of hearts in Firestore/
   * 
   */
  dbInitGame = () => {
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



  /**
   * startGame
   * * Method to start the game of hearts.
   * 
   */
  startGame = () => {
    // TODO: Start a game of hearts when all players have joined.
  };



  /**
   * submitCard
   * * Method to submit a card to the game.
   * 
   */
  submitCard = () => {
    // TODO: Submit a card to the game.
  };



  /**
   * getRoundData
   * * Method to get the round data from firebase.
   * 
   */
  getRoundData = () => {
    // TODO: Get the round data from firebase.
    // TODO: Calcolate player with highest card.
    // TODO: Calculate points of round
  };



  /**
   * dbUpdateScore
   * * Method to update the score in firebase.
   * 
   */
  dbUpdateScore = () => {
    // TODO: Update the score in firebase.
  };



  /**
   * dbUpdateAllPoints
   * * Method to subtract x amount of points from all losing players when a player has all points of round.
   * 
   */
  dbUpdateAllPoints = () => {
    // TODO: Subtract x amount of points from all losing players when a player has all points of round.
  };



  /**
   * dbUpdateAllCards
   * * Method to subtract x amount of cards from all losing players when a player has all cards of round.
   * 
   */
  dbUpdateAllCards = () => {
    // TODO: Subtract x amount of cards from all losing players when a player has all cards of round.
  };
}
