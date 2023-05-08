import { MemoSessionCard, MemoSessionLevel } from 'models';

export interface MemoSession {
  level: MemoSessionLevel,
  cards: Array<MemoSessionCard>;
  counter: number;
  score: number;
}