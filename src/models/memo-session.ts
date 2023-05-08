import { Level, MemoSessionCard } from 'models';

export interface MemoSession {
  level: Level,
  cards: Array<MemoSessionCard>;
  counter: number;
  score: number;
}