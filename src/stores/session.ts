import { Card } from 'models';
import { useStore } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';

type SessionCard = { card: Card, flipped: boolean };

interface SessionStoreState  {
  activeCardNumber: number;
  cards: Array<SessionCard>;
  counter: number;

  clear: () => void;
  clearActiveCard: () => void;
  setCards: (cards: Array<SessionCard>) => void;
  setActiveCard: (cardNumber: number) => void;
  setCardFlipped: (cardNumber: number, flipped: boolean) => void;
  incrementCounter: () => void;
}

export const SessionStore = createStore(
  persist(
    immer<SessionStoreState>((set) => ({
      activeCardNumber: -1,
      cards: [],
      counter: 0,

      clear() {
        set((state: SessionStoreState) => {
          state.activeCardNumber = -1;
          state.cards = [];
          state.counter = 0;
        });
      },

      clearActiveCard() {
        set((state: SessionStoreState) => {
          state.activeCardNumber = -1;
        });
      },

      setCards(cards) {
        set((state: SessionStoreState) => {
          state.cards = cards;
        });
      },

      setActiveCard(cardNumber) {
        set((state: SessionStoreState) => {
          state.activeCardNumber = cardNumber;
        });
      },

      setCardFlipped(cardNumber, flipped) {
        set((state: SessionStoreState) => {
          state.cards.forEach(sessionCard => {
            if (sessionCard.card.number === cardNumber) {
              sessionCard.flipped = flipped;
            }
          });
        });
      },

      incrementCounter() {
        set((state: SessionStoreState) => { state.counter++; });
      },
    })),
    {
      name: 'session-storage',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);

export const useSessionStore = (selector: (state: SessionStoreState) => any) => useStore(SessionStore, selector);
