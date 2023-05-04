import { goToGameRoom } from 'actions';
import { CardTheme, Figure } from 'models';
import { SessionCard, SessionStore } from 'stores';
import { generateRandomElements, getEnumValues, shuffleArray } from 'utilities';

export function startMemoGame() {
  const cardTheme = CardTheme.ZIGZAG;
  const numberOfCards = 12;
  const figures: Array<Figure> = generateRandomElements(getEnumValues(Figure) as Array<Figure>, numberOfCards / 2);
  const cardFigures = shuffleArray(figures.concat([...figures]));
  const sessionCards = cardFigures.map((figure, index) => ({ figure, theme: cardTheme, number: index + 1, flipped: false } as SessionCard));
  const sessionStore = SessionStore.getState();
  sessionStore.clear();
  sessionStore.setCards(sessionCards);
  goToGameRoom();
}