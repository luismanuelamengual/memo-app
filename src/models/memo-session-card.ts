import { CardTheme, FigureType } from 'models';

export interface MemoSessionCard {
  theme: CardTheme;
  figure: FigureType;
  number: number;
  flipped: boolean;
  temporaryFlipped: boolean;
}