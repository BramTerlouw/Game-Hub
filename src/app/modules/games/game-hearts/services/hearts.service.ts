import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { doc, getFirestore } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';
import { map } from 'rxjs';
import { Card } from 'src/app/schematics/card';
import { Game_Hearts } from 'src/app/schematics/game_hearts';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';

@Injectable({
  providedIn: 'root',
})
export class HeartsService {
  deck!: Card[];
  hands!: Array<{uid: string; hand: Card[]}>;

  currentRound!: Array<{ uid: string; card: Card }>;

  constructor(
    private cardService: CardService,
    private db: AngularFirestore,
    private auth: AuthService,
  ) {}



  /**
   * initGame
   * * Method to initialize a new game of hearts.
   * 
   * @param gameRef Parameter for game id.
   *
   */
  initGame = (gameRef: string) => {
    this.deck = this.cardService.createDeck();
    this.deck = this.cardService.shuffleDeck(this.deck);
    this.hands = this.cardService.dealCountHands(this.deck, 4);

    // TODO: Create a new game in firebase with deck and hand data.
    this.dbInitGame(gameRef, this.hands);
  };



  /**
   * dbInitGame
   * * Method to initialize a new game of hearts in Firestore.
   *
   * @param gameRef Parameter for game id.
   * @param hands Parameter for hands of players.
   * @param maxScore Parameter for max score of game.
   *
   */
  dbInitGame = async (gameRef: string,  hands: Array<{uid: string; hand: Card[]}>, maxScore?: number) => {
    let data: Game_Hearts;

    this.auth.getUser().then(async (user) => {
      hands[0].uid = user.uid;

      data = {
        gameId: gameRef,
        createdAt: Date.now(),
        scores: [],
        maxScore: maxScore || 40,
        maxScoreReached: false,
        participants: [user.uid],
        hands: hands,
        currentRound: [],
        playerOrder: [],
        currentPlayer: '',
      };

      const docRef = await this.db.collection('hearts').doc(gameRef).set(data);
    });
  };



  /**
   * getGame
   * * Method to get game data from Firestore.
   * 
   * @param gameRef Parameter for game id.
   * @returns A subscription to the game data.
   * 
   */
  getGame = (gameRef: string) => {
    return this.db.collection('hearts')
      .doc(gameRef)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  };



  /**
   * joinGame
   * * Method to join an existing game of hearts.
   * - Gets data from getMessage listener.
   * - Pass data to claimHand method to edit data.
   * - With 4 participants, start game.
   * 
   * @param gameRef Parameter for game id.
   *
   */
  joinGame = (gameRef: string) => {
    getDoc(doc(getFirestore(), 'hearts', gameRef))
      .then((doc) => {
        let data = doc.data() as Game_Hearts;
        this.claimHand(data);
      });
  };



  /**
   * exitGame
   * * Method to exit an existing game of hearts.
   * 
   * @param gameRef Parameter for game id.
   * 
   */
  exitGame = (gameRef: string) => {
    // TODO: Remove player uid from participants array.
    // TODO: Remove player hand from hands array.
  };



  /**
   * endGame
   * * Method to end an existing game of hearts.
   * 
   * @param gameRef Parameter for game id.
   * 
   */
  endGame = (gameRef: string) => {
    // TODO: Remove game from firebase.
  };



  /**
   * claimHand
   * * Method to claim a hand of hearts.
   * 
   * @param gameData Parameter with game data and updated values.
   * TODO: Add check if hand is already claimed.
   * 
   */
  claimHand = async (gameData: Game_Hearts) => {
    this.auth.getUser().then(async (user) => {

      if (!gameData.participants.includes(user.uid)) {
        gameData.participants.push(user.uid);

        for (let i = 0; i < gameData.hands.length; i++) {
          if (gameData.hands[i].uid === '') {
            gameData.hands[i].uid = user.uid;
            break;
          }
        }

        this.updateGame(gameData);
        this.checkNumberOfParticipants(gameData, gameData.hands.length);
      }
    });
  };



  /**
   * checkNumberOfParticipants
   * * Method to check if game has x amount of participants.
   * 
   * @param gameData Parameter with game data and updated values.
   * 
   */
  checkNumberOfParticipants = (gameData: Game_Hearts, maxParticipants: number) => {
    if (gameData.participants.length === 2) { // TODO: TEMPTEMPTEMP
      this.startGame(gameData.gameId);
    }
  };



  /**
   * getHand
   * * Method to get hand of hearts.
   * 
   * @param gameRef Parameter for game id.
   * @param uid Parameter for user id.
   * 
   */
  getHand = async (gameRef: string, uid: string) => {
    let hand: Card[] = [];

    await getDoc(doc(getFirestore(), 'hearts', gameRef)).then((doc) => {
      let data = doc.data() as Game_Hearts;
      hand = data.hands.find((hand: {uid: string; hand: Card[]}) => hand.uid === uid)?.hand || [];
    });

    return hand;
  };



  /**
   * updateGame
   * * Method to update game data in firebase.
   * 
   * @param gameData Parameter with game data and updated values.
   * @returns The updated game data.
   */
  updateGame = (gameData: Game_Hearts) => {
    const userRef: AngularFirestoreDocument<any> = this.db.doc(`hearts/${gameData.gameId}`);
    return userRef.set(gameData, { merge: true });
  }



  /**
   * startGame
   * * Method to start the game of hearts.
   *
   * @param gameData Parameter with game data that has to be updated before starting.
   * 
   */
  startGame = (gameRef: string) => {
    getDoc(doc(getFirestore(), 'hearts', gameRef))
    .then((doc) => {
      let data = doc.data() as Game_Hearts;
      
      data.playerOrder = this.setRandomOrder(data.participants);
      
      data.currentPlayer = data.playerOrder[0].uid;
      
      this.updateGame(data);
    });
  };



  /**
   * setRandomOrder
   * * Method to set a random order of players.
   * 
   * @param players Parameters containing uids of players.
   * @returns New array with random order of players.
   * 
   * TODO: Can be simpler by removing index and use array index.
   */
  setRandomOrder = (players: Array<string>) => {
    let randomList = []
    
    while (players.length > 0) {
      let random = Math.floor(Math.random() * players.length);
      randomList.push(
        {
          index: players.length, 
          uid: players[random]
        }
      );
      players.splice(random, 1);
    }
    return randomList;
  };



  /**
   * submitCard
   * * Method to submit a card to the game.
   *
   */
  submitCard = (card: Card) => {
    // TODO: Submit a card to the game.
  };



  /**
   * getRoundData
   * * Method to get the round data from firebase.
   * 
   * @param gameRef Parameter for game id.
   *
   */
  getRoundData = (gameRef: string) => {
    // TODO: Get the round data from firebase.
    // TODO: Calcolate player with highest card.
    // TODO: Calculate points of round
  };



  /**
   * dbUpdateScore
   * * Method to update the score in firebase.
   * 
   * @param uid Parameter for user id.
   * @param score Parameter for score of round.
   *
   */
  dbUpdateScore = (uid: string, score: number) => {
    // TODO: Update the score in firebase.
  };



  /**
   * dbUpdateAllPoints
   * * Method to subtract x amount of points from all 
   * * losing players when a player has all points of round.
   * 
   * @param action Parameter for action to perform.
   *
   */
  dbUpdateAllPoints = (action: 'raiseAll' | 'lowerSelf') => {
    // TODO: Subtract x amount of points from all losing players when a player has all points of round.
  };



  /**
   * dbUpdateAllCards
   * * Method to subtract x amount of cards from all 
   * * losing players when a player has all cards of round.
   * 
   * @param action Parameter for action to perform.
   *
   */
  dbUpdateAllCards = (action: 'raiseAll' | 'lowerSelf') => {
    // TODO: Subtract x amount of cards from all losing players when a player has all cards of round.
  };



  /**
   * getDoc
   * * Method to get specific document.
   *
   * @param gameRef Parameter with reference to document.
   *
   */
  getDoc = (gameRef: string) => {
    let docRef = this.db.collection('hearts').doc(gameRef);
    return docRef.ref.get();
  };
}
