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

export function flipMemoCard(cardNumber: number) {
  if (!MemoStore.session) {
    throw new Error('No session started');
  }
  const card = MemoStore.getSessionCard(cardNumber);
  if (!card) {
    throw new Error (`Card with number "${cardNumber}" was not found !!`);
  }
  MemoStore.flipTemporarySessionCard(cardNumber);
  const temporaryFlippedCards = MemoStore.getSessionTemporaryFlippedCards();
  if (temporaryFlippedCards.length > 1) {
    const areTemporaryCardsSameFigure = temporaryFlippedCards.map(card => card.figure).every((v,i,arr) => v === arr[0]);
    if (areTemporaryCardsSameFigure) {
      MemoStore.flipTemporarySessionCards();
    } else {
      MemoStore.foldTemporarySessionCards();
    }
  } else {
    MemoStore.incrementSessionCounter();
  }
}