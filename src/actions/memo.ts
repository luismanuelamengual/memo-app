import { goToMemoPage, goToMemoResultPage } from 'actions';
import { CardTheme, Figure } from 'models';
import { MemoSessionCard, MemoStore } from 'stores';
import { generateRandomElements, getEnumValues, shuffleArray, sleep } from 'utilities';

export function startMemoGame() {
  const sessionCardTheme = CardTheme.ZIGZAG;
  const sessionNumberOfCards = 6;
  const sessionFiguresToUse: Array<Figure> = generateRandomElements(getEnumValues(Figure) as Array<Figure>, sessionNumberOfCards / 2);
  const sessionFigures = shuffleArray(sessionFiguresToUse.concat([...sessionFiguresToUse]));
  const sessionCards = sessionFigures.map((figure, index) => ({ figure, theme: sessionCardTheme, number: index + 1, flipped: false, temporaryFlipped: false } as MemoSessionCard));
  MemoStore.getState().startSession(sessionCards);
  goToMemoPage();
}

export async function flipMemoCard(cardNumber: number) {
  if (MemoStore.getState().getSessionTemporaryFlippedCards().length < 2) {
    MemoStore.getState().flipTemporarySessionCard(cardNumber);
    const temporaryFlippedCards = MemoStore.getState().getSessionTemporaryFlippedCards();
    if (temporaryFlippedCards.length > 1) {
      MemoStore.getState().incrementSessionCounter();
      const areTemporaryCardsSameFigure = temporaryFlippedCards.map(card => card.figure).every((v,i,arr) => v === arr[0]);
      if (areTemporaryCardsSameFigure) {
        MemoStore.getState().flipTemporarySessionCards();
        const memoState = MemoStore.getState();
        if (memoState.isSessionEnded()) {
          const session = memoState.session;
          memoState.setSessionScore(session ? (((session.cards.length / 2) / session.counter) * 100) : 0);
          await sleep(1500);
          goToMemoResultPage();
        }
      } else {
        await sleep(1000);
        MemoStore.getState().foldTemporarySessionCards();
      }
    }
  }
}