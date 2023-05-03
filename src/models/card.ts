import { CardTheme } from './card-theme';
import { Figure } from './figure';

export interface Card {
  theme: CardTheme;
  figure: Figure;
  number?: number;
}