import { Card } from "./card";

export interface Game_Hearts {
    gameId: string, 
    createdAt: number, 
    scores: Array<{uid: string; score: number}>, 
    maxScore: number, 
    maxScoreReached: boolean, 
    participants: Array<string>,
    hands: Array<{uid: string; hand: Array<Card>}>,
    currentRound: Array<{uid: string; card: Card}>,
    playerOrder: Array<{index: number; uid: string}>,
    currentPlayer: string,
}