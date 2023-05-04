import { Card } from 'models';
import { useStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';

export type MemoSessionCard = Card & { flipped: boolean, temporaryFlipped: boolean };

export interface MemoSession {
  cards: Array<MemoSessionCard>;
  counter: number;
  score: number;
}

interface MemoStoreState  {
  session: MemoSession | null;

  clearSession: () => void;
  startSession: (cards: Array<MemoSessionCard>) => void;
  flipTemporarySessionCard: (cardNumber: number) => void;
  flipTemporarySessionCards: () => void;
  foldTemporarySessionCards: () => void;
  incrementSessionCounter: () => void;
  setSessionScore: (score: number) => void;
  getSessionCard: (cardNumber: number) => Card | null;
  getSessionTemporaryFlippedCards(): Array<MemoSessionCard>;
  isSessionEnded: () => boolean;
}

const memoStore = createStore(
  persist(
    immer<MemoStoreState>((set, get) => ({
      session: null,

      clearSession() {
        set((state: MemoStoreState) => {
          state.session = null;
        });
      },

      startSession(cards) {
        set((state: MemoStoreState) => {
          state.session = {
            cards,
            counter: 0,
            score: 0
          };
        });
      },

      flipTemporarySessionCard(cardNumber: number) {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.cards.forEach(sessionCard => {
              if (sessionCard.number === cardNumber) {
                sessionCard.temporaryFlipped = true;
              }
            });
          }
        });
      },

      flipTemporarySessionCards() {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.cards.forEach(sessionCard => {
              if (sessionCard.temporaryFlipped === true) {
                sessionCard.temporaryFlipped = false;
                sessionCard.flipped = true;
              }
            });
          }
        });
      },

      foldTemporarySessionCards() {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.cards.forEach(sessionCard => {
              if (sessionCard.temporaryFlipped === true) {
                sessionCard.temporaryFlipped = false;
              }
            });
          }
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

      getSessionCard(cardNumber: number): Card | null {
        return get().session?.cards.find(card => card.number == cardNumber) ?? null;
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

export const MemoStore = memoStore.getState();
export const useMemoStore = (selector: (state: MemoStoreState) => any) => useStore(memoStore, selector);
