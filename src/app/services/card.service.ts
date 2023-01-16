import { Injectable } from '@angular/core';
import { Card } from '../schematics/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private values: Array<string>;
  private suits: Array<'spades' | 'hearts' | 'diamonds' | 'clubs'>;

  constructor() {
    this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.suits = ['spades', 'hearts', 'diamonds', 'clubs'];
  }



  /**
   * createDeck
   * * Method to create a deck of cards.
   * 
   * @returns A new deck of cards.
   * 
   */
  createDeck = () => {
    let deck: Card[] = [];

    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.values.length; j++) {
        deck.push({ suit: this.suits[i], value: this.values[j] });
      }
    }
    return deck;
  };



  /**
   * shuffleDeck
   * * Method to shuffle a deck of cards.
   * 
   * @param deck Parameter with deck of cards to be shuffled.
   * @returns A shuffled deck of cards.
   * 
   */
  shuffleDeck = (deck: Card[]) => {
    for (let i = 0; i < deck.length; i++) {
      let rand = Math.floor(Math.random() * deck.length);
      let temp = deck[i];
      deck[i] = deck[rand];
      deck[rand] = temp;
    }
    return deck;
  };


  //----------------------------------------------------------------------//
  /**
   * dealDeck
   * * Method to deal a deck of cards into four hands.
   * 
   * * Method contains two submethods: pushCountHands and dealCardsToHands.
   * - pushCountHands: Pushes empty arrays into hands array.
   * - dealCardsToHands: Deals cards to hands array.
   * 
   * @param deck Parameter with deck of cards to be dealt.
   * @param count Parameter with number of hands to deal to.
   * @returns Four hands of cards.
   * 
  */
  dealCountHands = (deck: Card[], count: number) => {
    let hands: Array<{uid: string, hand: Card[]}> = [];

    this.pushCountHands(count, hands);
    this.dealCardsToHands(deck, hands, count);

    return hands;
  }

  /**
   * pushCountHands
   * * Submethod to add amount of hands to hands array.
   * 
   * @param count Parameter with number of hands to deal to.
   * @param hands Parameter with empty hands array.
   * 
   */
  private pushCountHands = (count: number, hands: Array<{uid: string; hand: Card[]}>) => {
    for (let i = 0; i < (count); i++) {
      hands.push({uid: '', hand: []});
    }
  }

  /**
   * dealCardsToHands
   * * Submethod to deal cards to hands array.
   * 
   * @param deck Parameter with deck of cards to be dealt.
   * @param hands Parameter with empty hands array.
   * @param count Parameter with number of hands to deal to.
   * 
   */
  private dealCardsToHands = (deck: Card[], hands: Array<{uid: string; hand: Card[]}>, count: number) => {
    for (let i = 0; i < deck.length; i++) {
      hands[i % count].uid = '';
      hands[i % count].hand.push(deck[i]);
    }
  };
  //----------------------------------------------------------------------//
}
