import { Card } from 'models';
import { useStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';

export type MemoSessionCard = Card & { flipped: boolean };

export interface MemoSession {
  comparissonCardNumber: number;
  cards: Array<MemoSessionCard>;
  counter: number;
}

interface MemoStoreState  {
  session: MemoSession | null;

  clearSession: () => void;
  startSession: (cards: Array<MemoSessionCard>) => void;
  clearSessionComparissonCard: () => void;
  setSessionComparissonCard: (cardNumber: number) => void;
  setSessionCardFlipped: (cardNumber: number, flipped: boolean) => void;
  incrementSessionCounter: () => void;
}

export const MemoStore = createStore(
  persist(
    immer<MemoStoreState>((set) => ({
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
            comparissonCardNumber: -1,
            counter: 0
          };
        });
      },

      clearSessionComparissonCard() {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.comparissonCardNumber = -1;
          }
        });
      },

      setSessionComparissonCard(cardNumber) {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.comparissonCardNumber = cardNumber;
          }
        });
      },

      setSessionCardFlipped(cardNumber, flipped) {
        set((state: MemoStoreState) => {
          if (state.session) {
            state.session.cards.forEach(sessionCard => {
              if (sessionCard.number === cardNumber) {
                sessionCard.flipped = flipped;
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
    })),
    {
      name: 'memo-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export const useMemoStore = (selector: (state: MemoStoreState) => any) => useStore(MemoStore, selector);
