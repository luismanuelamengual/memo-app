import { goToGameRoom } from 'actions';
import { CardTheme, Figure } from 'models';
import { MemoSessionCard, MemoStore } from 'stores';
import { generateRandomElements, getEnumValues, shuffleArray } from 'utilities';

export function startMemoGame() {
  const sessionCardTheme = CardTheme.ZIGZAG;
  const sessionNumberOfCards = 12;
  const sessionFiguresToUse: Array<Figure> = generateRandomElements(getEnumValues(Figure) as Array<Figure>, sessionNumberOfCards / 2);
  const sessionFigures = shuffleArray(sessionFiguresToUse.concat([...sessionFiguresToUse]));
  const sessionCards = sessionFigures.map((figure, index) => ({ figure, theme: sessionCardTheme, number: index + 1, flipped: false } as MemoSessionCard));
  MemoStore.startSession(sessionCards);
  goToGameRoom();
}