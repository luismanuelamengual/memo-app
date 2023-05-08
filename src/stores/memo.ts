import { MemoSession, MemoSessionCard, MemoSessionLevel } from 'models';
import { useStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';

interface MemoStoreState  {
  highScores: { [key in MemoSessionLevel]: number };
  session: MemoSession | null;

  clearSession: () => void;
  startSession: (level: MemoSessionLevel, cards: Array<MemoSessionCard>) => void;
  flipTemporarySessionCard: (cardNumber: number) => void;
  flipTemporarySessionCards: () => void;
  foldTemporarySessionCards: () => void;
  incrementSessionCounter: () => void;
  setSessionScore: (score: number) => void;
  setHighScore: (level: MemoSessionLevel, score: number) => void;
  getSessionTemporaryFlippedCards(): Array<MemoSessionCard>;
  isSessionEnded: () => boolean;
}

export const MemoStore = createStore(
  persist(
    immer<MemoStoreState>((set, get) => ({
      highScores: {
        [MemoSessionLevel.EASY]: 0,
        [MemoSessionLevel.MEDIUM]: 0,
        [MemoSessionLevel.HARD]: 0
      },
      session: null,

      clearSession() {
        set((state: MemoStoreState) => {
          state.session = null;
        });
      },

      startSession(level, cards) {
        set((state: MemoStoreState) => {
          state.session = {
            level,
            cards,
            counter: 0,
            score: 0
          };
        });
      },

      flipTemporarySessionCard(cardNumber: number) {
        set((state: MemoStoreState) => {
          state.session?.cards.forEach(sessionCard => {
            if (sessionCard.number === cardNumber) {
              sessionCard.temporaryFlipped = true;
            }
          });
        });
      },

      flipTemporarySessionCards() {
        set((state: MemoStoreState) => {
          state.session?.cards.forEach(sessionCard => {
            if (sessionCard.temporaryFlipped === true) {
              sessionCard.temporaryFlipped = false;
              sessionCard.flipped = true;
            }
          });
        });
      },

      foldTemporarySessionCards() {
        set((state: MemoStoreState) => {
          state.session?.cards.forEach(sessionCard => {
            if (sessionCard.temporaryFlipped === true) {
              sessionCard.temporaryFlipped = false;
            }
          });
        });
      },

      incrementSessionCounter() {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.counter++;
          }
        });
      },

      setSessionScore(score: number) {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.score = score;
          }
        });
      },

      setHighScore(level: MemoSessionLevel, score: number) {
        set((state: MemoStoreState) => {
          state.highScores[level] = score;
        });
      },

      getSessionTemporaryFlippedCards(): Array<MemoSessionCard> {
        return get().session?.cards.filter(card => card.temporaryFlipped) ?? [];
      },

      isSessionEnded(): boolean {
        return get().session?.cards.every(card => card.flipped) ?? false;
      }
    })),
    {
      name: 'memo-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export const useMemoStore = (selector: (state: MemoStoreState) => any) => useStore(MemoStore, selector);
