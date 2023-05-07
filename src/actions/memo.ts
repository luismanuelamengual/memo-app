import { goToMemoPage, goToMemoResultPage } from 'actions';
import { CardTheme, Figure, Level } from 'models';
import { MemoSession, MemoSessionCard, MemoStore } from 'stores';
import { generateRandomElements, getEnumValues, playSound, shuffleArray, sleep } from 'utilities';

export function startMemoGame(level: Level) {
  let sessionNumberOfCards;
  switch(level) {
    case Level.EASY: sessionNumberOfCards = 12; break;
    case Level.MEDIUM: sessionNumberOfCards = 18; break;
    case Level.HARD: sessionNumberOfCards = 24; break;
  }
  const sessionCardTheme = CardTheme.CARBON_FIBER;
  const sessionFiguresToUse: Array<Figure> = generateRandomElements(getEnumValues(Figure) as Array<Figure>, sessionNumberOfCards / 2);
  const sessionFigures = shuffleArray(sessionFiguresToUse.concat([...sessionFiguresToUse]));
  const sessionCards = sessionFigures.map((figure, index) => ({ figure, theme: sessionCardTheme, number: index + 1, flipped: false, temporaryFlipped: false } as MemoSessionCard));
  MemoStore.getState().startSession(level, sessionCards);
  goToMemoPage();
}

export function resumeMemoGame() {
  goToMemoPage();
}

export async function flipMemoCard(cardNumber: number) {
  const memoState = MemoStore.getState();
  if (memoState.getSessionTemporaryFlippedCards().length < 2) {
    memoState.flipTemporarySessionCard(cardNumber);
    const temporaryFlippedCards = memoState.getSessionTemporaryFlippedCards();
    if (temporaryFlippedCards.length > 1) {
      memoState.incrementSessionCounter();
      const areTemporaryCardsSameFigure = temporaryFlippedCards.map(card => card.figure).every((v,i,arr) => v === arr[0]);
      if (areTemporaryCardsSameFigure) {
        playSound('/sounds/success.wav');
        memoState.flipTemporarySessionCards();
        if (memoState.isSessionEnded()) {
          const session = MemoStore.getState().session as MemoSession;
          const score = ((session.cards.length / 2) / session.counter) * 100;
          memoState.setSessionScore(score);
          if (score > memoState.highScores[session.level]) {
            memoState.setHighScore(session.level, score);
          }
          await sleep(1500);
          playSound('/sounds/success_fanfair.mp3');
          goToMemoResultPage();
        }
      } else {
        await sleep(1000);
        playSound('/sounds/fail.wav');
        memoState.foldTemporarySessionCards();
      }
    }
  }
}